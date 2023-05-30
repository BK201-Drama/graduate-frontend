/*
屎山警告
 */
import React from 'react'
import {Divider, Radio, Typography} from 'antd'

const {Title, Paragraph, Text, Link} = Typography
const App = () => (
    <Typography>
        <Title>2023年国家公务员考试行测试题（地市级）</Title>

        <Paragraph>
            1、党的二十大报告指出，全面建成社会主义现代化强国，总的战略安排是分两步走。关于到二〇三五年我国发展的总体目标，下列表述正确的有几项：
            <br/>①经济实力、科技实力、综合国力大幅跃升，人均国内生产总值迈上新的大台阶，达到中等发达国家水平
            <br/>②实现高水平科技自立自强，力争进入创新型国家行列
            <br/>③建成现代化经济体系，形成新发展格局，基本实现新型工业化、信息化、城镇化、农业现代化
            <br/>④广泛形成绿色生产生活方式，基本实现“碳中和”目标、生态环境根本好转，美丽中国目标全面实现
            <br/>⑤把我国建设成为综合国力和国际影响力领先的社会主义现代化强国
        </Paragraph>
        <Radio.Group>
            <Radio value={1}>2项</Radio>
            <Radio value={2}>3项</Radio>
            <Radio value={3}>4项</Radio>
            <Radio value={4}>5项</Radio>
        </Radio.Group>
        <Divider/>

        <Paragraph>
            2、党的二十大报告指出，要发展全过程人民民主，保障人民当家作主。关于人民民主，下列表述正确的是：
            <br/>①人民民主是社会主义的生命，是全面建设社会主义现代化国家的应有之义
            <br/>②全过程人民民主是社会主义民主政治的本质属性，是最广泛、最真实、最管用的民主
            <br/>③协商民主是实践全过程人民民主的重要形式
            <br/>④党内民主是全过程人民民主的重要体现
        </Paragraph>
        <Radio.Group>
            <Radio value={1}>①②④</Radio>
            <Radio value={2}>①②③</Radio>
            <Radio value={3}>②③④</Radio>
            <Radio value={4}>①③④</Radio>
        </Radio.Group>
        <Divider/>

        <Paragraph>
            3、党的二十大报告指出，新时代十年来“党和国家事业取得历史性成就、发生历史性变革”。关于新时代十年来取得的历史性成就，下列表述错误的是：
        </Paragraph>
        <Radio.Group>
            <Radio value={1}>全社会研发经费支出跃居世界第一</Radio>
            <Radio value={2}>谷物总产量稳居世界首位</Radio>
            <Radio value={3}>制造业规模、外汇储备稳居世界第一</Radio>
            <Radio value={4}>建成世界最大的高速铁路网</Radio>
        </Radio.Group>
        <Divider/>

        <Paragraph>
            4、习近平经济思想是习近平新时代中国特色社会主义思想的重要组成部分。关于习近平经济思想，下列表述正确的有几项？
            <br/>①进入新发展阶段是我国经济发展的历史方位
            <br/>②推动高质量发展是我国经济发展的鲜明主题
            <br/>③坚持新发展理念是我国经济发展的指导原则
            <br/>④坚持对外开放是我国经济发展的第一动力
            <br/>⑤大力发展制造业和实体经济是我国经济发展的主要着力点
        </Paragraph>
        <Radio.Group>
            <Radio value={1}>2项</Radio>
            <Radio value={2}>3项</Radio>
            <Radio value={3}>4项</Radio>
            <Radio value={4}>5项</Radio>
        </Radio.Group>
        <Divider/>
    </Typography>
)
export default App