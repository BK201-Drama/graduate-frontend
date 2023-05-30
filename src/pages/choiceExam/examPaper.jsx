/*
屎山警告
 */
import React from 'react'
import QuestionAnchor from '@/shared/QuestionAnchor'

const Commentary = () => {
    const questions = [
        {
            title: '党的二十大报告指出，全面建成社会主义现代化强国，总的战略安排是分两步走。关于到二〇三五年我国发展的总体目标，下列表述正确的有几项：①经济实力、科技实力、综合国力大幅跃升，人均国内生产总值迈上新的大台阶，达到中等发达国家水平②实现高水平科技自立自强，力争进入创新型国家行列③建成现代化经济体系，形成新发展格局，基本实现新型工业化、信息化、城镇化、农业现代化④广泛形成绿色生产生活方式，基本实现“碳中和”目标、生态环境根本好转，美丽中国目标全面实现⑤把我国建设成为综合国力和国际影响力领先的社会主义现代化强国',
            id: 1,
            options: [
                { value: 0, label: '2项' },
                { value: 1, label: '3项' },
                { value: 2, label: '4项' },
                { value: 3, label: '5项' },
            ],
        },
        {
            title: '党的二十大报告指出，要发展全过程人民民主，保障人民当家作主。关于人民民主，下列表述正确的是：①人民民主是社会主义的生命，是全面建设社会主义现代化国家的应有之义②全过程人民民主是社会主义民主政治的本质属性，是最广泛、最真实、最管用的民主③协商民主是实践全过程人民民主的重要形式④党内民主是全过程人民民主的重要体现',
            id: 2,
            options: [
                { value: 0, label: '①②④' },
                { value: 1, label: '①②③' },
                { value: 2, label: '②③④' },
                { value: 3, label: '①③④' },
            ],
        },
        {
            title: '党的二十大报告指出，新时代十年来“党和国家事业取得历史性成就、发生历史性变革”。关于新时代十年来取得的历史性成就，下列表述错误的是：',
            id: 3,
            options: [
                { value: 0, label: '全社会研发经费支出跃居世界第一' },
                { value: 1, label: '谷物总产量稳居世界首位' },
                { value: 2, label: '制造业规模、外汇储备稳居世界第一' },
                { value: 3, label: '建成世界最大的高速铁路网' },
            ],
        },
        {
            title: '习近平经济思想是习近平新时代中国特色社会主义思想的重要组成部分。关于习近平经济思想，下列表述正确的有几项？①进入新发展阶段是我国经济发展的历史方位②推动高质量发展是我国经济发展的鲜明主题③坚持新发展理念是我国经济发展的指导原则④坚持对外开放是我国经济发展的第一动力⑤大力发展制造业和实体经济是我国经济发展的主要着力点',
            id: 4,
            options: [
                { value: 0, label: '2项' },
                { value: 1, label: '3项' },
                { value: 2, label: '4项' },
                { value: 3, label: '5项' },
            ],
        },
        {
            title: '习近平总书记指出，共同富裕是社会主义的本质要求，是中国式现代化的重要经验。下列对共同富裕的理解，正确的有几项？①共同富裕是全体人民的富裕，是人民群众物质生活和精神生活都富裕，不是少数人的富裕，也不是整齐划一的平均主义②鼓励各地因地制宜探索有效途径，按照城市，农村以及东部，中部，西部，确立各自指标，分阶段促进共同富裕③要处理效率和公平的关系，构建初次分配、再分配、三次分配协调配套的基础性制度安排④实现共同富裕的目标，首先要通过全国人民共同奋斗把“蛋糕”做大做好，然后通过合理的制度安排正确处理增长和分配关系，把“蛋糕”切好分好',
            id: 5,
            options: [
                { value: 0, label: '4项' },
                { value: 1, label: '3项' },
                { value: 2, label: '2项' },
                { value: 3, label: '1项' },
            ],
        },
        {
            title: '《“十四五”全国农业绿色发展规划》是我国首部农业绿色发展专项规划,对“十四五”农业绿色发展工作作出了系统部署和具体安排，下列与之相关的说法错误的是：',
            id: 6,
            options: [
                {value: 0, label: '在长江中下游，西南地区等南方粮食主产区集中示范耕作压盐技术模式'},
                {value: 1, label: '到2035年，农村生态环境根本好转，绿色生产生活方式广泛形成'},
                {value: 2, label: '以果菜茶优势区为重点推动粪肥还田利用，减少化肥用量'},
                {value: 3, label: '在西北地区支持一批用膜大县整县推进农膜回收'}
            ],
        },
        {
            title: 'title',
            id: 7,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 8,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 9,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 10,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 11,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 12,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 13,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 14,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 15,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 16,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 17,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 18,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 19,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 20,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 21,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 22,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 23,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 24,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 25,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 26,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 27,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 28,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 29,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
        {
            title: 'title',
            id: 30,
            options: [
                { value: 0, label: '0' },
                { value: 1, label: '1' },
            ],
        },
    ]
    const answer = {
        1:0,
        2:1,
        3:2
    }
    return (
        <div className="flex">
            <div className="flex flex-col">
                {questions.map((question, index) => (
                    <Question
                        key={question.id}
                        id={question.id}
                        title={question.title}
                        questionOrder={index}
                        options={question.options}
                        onChange={(value) => {
                            console.log(value, question.id)
                        }}
                    />
                ))}
            </div>
            <QuestionAnchor questions={questions} answer={answer} />
        </div>
    )
}

export default Commentary

