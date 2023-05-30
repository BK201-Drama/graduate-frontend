/*
屎山警告
 */
import React from 'react'
import {Button, Space} from 'antd'

const PaperTable = () => {
    const dataSource = [
        {
            key: '1',
            name: '2023年国家公务员考试行测试题（地市级）'
        },
        {
            key: '2',
            name: '2023年国家公务员考试行测试题（行政执法类）'
        },
        {
            key: '3',
            name: '2023年国家公务员考试行测试题（副省级）'
        },
        {
            key: '4',
            name: '2022年国家公务员考试行测试卷（地市级）'
        },
        {
            key: '5',
            name: '2022年国家公务员考试行测试题（行政执法类）'
        },
        {
            key: '6',
            name: '2022年国家公务员考试行测试题（副省级）'
        },
        {
            key: '7',
            name: '2021年国家公务员考试行测试卷（地市级）'
        },
        {
            key: '8',
            name: '2021年国家公务员考试行测试题（副省级）'
        },
        {
            key: '9',
            name: '2020年国家公务员考试行测试卷（地市级）'
        },
        {
            key: '10',
            name: '2020年国家公务员考试行测试题（副省级）'
        },
    ]

    const columns = [
        {
            title: '试卷标题',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '操作',
            key: 'action',
            render: () => (
                <Space>
                    <Button>查看试卷</Button>
                    <Button>查看试卷及答案</Button>
                    <Button>开始测试</Button>
                </Space>
            )
        },
    ]

    return <Table dataSource={dataSource} columns={columns}></Table>
}

export default PaperTable
