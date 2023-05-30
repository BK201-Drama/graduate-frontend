import {
  hasRTCPeerConnection,
  hasUserMedia,
  configuration,
  mediaDevices,
} from './utils'

const VideoFC = ({ interview_room, account, otherAccount }) => {
  // warning: 狗屎代码，这边建议直接找个sdk用，不然土豆服务器扛不住
  useEffect(() => {
    if (!(account && interview_room && otherAccount)) return
    const connection = new WebSocket('ws://localhost:9000')

    let localConnection
    let connectedUser
    let stream
    const localVideo = document.querySelector('#localVideo')
    const otherVideo = document.querySelector('#remoteVideo')

    connection.onopen = function () {
      console.log('connected')
      if (account) {
        send({
          type: 'login',
          name: `${interview_room}###${account}`,
        })
      }
    }
    // 通过回调函数处理所有的消息
    connection.onmessage = function (message) {
      console.log('Got message', message.data)
      const data = JSON.parse(message.data)

      switch (data.type) {
        case 'login':
          onLogin(data.success, data.isAnotherLink)
          break
        case 'offer':
          onOffer(data.offer, data.name)
          break
        case 'answer':
          onAnswer(data.answer)
          break
        case 'candidate':
          onCandidate(data.candidate)
          break
        case 'leave':
          onLeave()
          break
        default:
          break
      }
    }

    connection.onerror = function (err) {
      console.log('Got error', err)
    }

    // Alias 以json格式发送消息
    function send(message) {
      if (connectedUser) {
        message.name = connectedUser
      }
      connection.send(JSON.stringify(message))
    }
    // 用户登陆
    function onLogin(success, isAnotherLink) {
      if (success === false) {
        alert('Login unsuccessful, please try a different name.')
      } else {
        // 准备通话通道
        startConnection()
        // 如果已经有人连接，那么我们直接呼叫
        if (isAnotherLink) {
          if (otherAccount.length) {
            startPeerConnection(otherAccount)
          }
        }
      }
    }

    // 发送offer
    function onOffer(offer, name) {
      connectedUser = name
      localConnection.setRemoteDescription(new RTCSessionDescription(offer))
      localConnection.createAnswer(
        function (answer) {
          localConnection.setLocalDescription(answer)
          send({
            type: 'answer',
            answer: answer,
          })
        },
        () => alert('An error has occurred')
      )
    }
    // 发送answer
    function onAnswer(answer) {
      localConnection.setRemoteDescription(new RTCSessionDescription(answer))
    }
    // 交换ICE候选
    function onCandidate(candidate) {
      localConnection.addIceCandidate(new RTCIceCandidate(candidate))
    }

    // 用户离开
    function onLeave() {
      connectedUser = null
      otherVideo.srcObject = null
      localConnection.close()
      localConnection.onicecandidate = null
      localConnection.onaddstream = null
      setupPeerConnection(stream)
    }

    // 开始尝试连接
    function startConnection() {
      if (hasUserMedia()) {
        mediaDevices((myStream) => {
          stream = myStream
          localVideo.srcObject = stream
          if (hasRTCPeerConnection()) setupPeerConnection(stream)
          else alert('sorry,your browser does not support webRTC')
        })
      } else alert('sorry, your browser does not support webRTC')
    }
    // 创建RTCPeerConnection
    function setupPeerConnection(stream) {
      localConnection = new RTCPeerConnection(configuration)
      // 设置流的监听
      localConnection.addStream(stream)
      localConnection.onaddstream = function (e) {
        otherVideo.srcObject = e.stream
      }

      // 设置ice处理事件
      localConnection.onicecandidate = function (event) {
        if (event.candidate) {
          send({
            type: 'candidate',
            candidate: event.candidate,
          })
        }
      }
    }

    function startPeerConnection(user) {
      connectedUser = user
      // 开始创建offer
      localConnection.createOffer(
        function (offer) {
          send({
            type: 'offer',
            offer: offer,
          })
          localConnection.setLocalDescription(offer)
        },
        () => alert('an error has occurred')
      )
    }
  }, [account, interview_room])

  return (
    <>
      <div className="flex gap-[5px]">
        <div className="w-[32vw] bg-[#000] flex items-center">
          <video id="localVideo" autoPlay className="w-[32vw]"></video>
        </div>
        <div className="w-[32vw] bg-[#000] flex items-center">
          <video id="remoteVideo" autoPlay></video>
        </div>
      </div>
    </>
  )
}

export default VideoFC
