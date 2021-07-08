import TestData from '../static/TestData'

export const perPagePostSample = [
    [
        "Get full page",
        TestData,
        3,
        5
    ],
    [
        "Get first partial page",
        TestData.slice(0, 4),
        1,
        4
    ],
    [
        "Get last partial page",
        TestData,
        4,
        3
    ],
    [
        "Get invalid page",
        TestData,
        1234,
        0
    ]
]