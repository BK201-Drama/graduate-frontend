// 判断浏览器支持WebRTC
export const hasRTCPeerConnection = () => {
  window.RTCPeerConnection =
    window.RTCPeerConnection ||
    window.webkitRTCPeerConnection ||
    window.mozRTCPeerConnection
  window.RTCSessionDescription =
    window.RTCSessionDescription ||
    window.webkitRTCSessionDescription ||
    window.mozRTCSessionDescription
  window.RTCIceCandidate =
    window.RTCIceCandidate ||
    window.webkitRTCIceCandidate ||
    window.mozRTCIceCandidate
  return !!window.RTCPeerConnection
}

// 判断可以获取本地摄像头视频流
export function hasUserMedia() {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia | navigator.msGetUserMedia
  return !!navigator.getUserMedia
}

export const configuration = {
  iceServers: [{ url: 'stun:stun.1.google.com:19302' }],
}

export const mediaDevices = (fn) => {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then(fn, (err) => console.log(err))
}
