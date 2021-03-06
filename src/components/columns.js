let columns = {};

columns.userColumns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    sorter: (a, b) => a.type.length - b.type.length,
    width: '10%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '25%',
  },
  {
    title: 'Roll',
    dataIndex: 'roll',
    key: 'roll',
    filters: [
      { text: 'AA', value: 'Attestation Agency' },
      { text: 'SP', value: 'Service Provider' },
    ],
    width: '20%',
    filterMultiple: false,
    onFilter: (value, record) => record.roll.indexOf(value) === 0,
  },
  {
    title: 'Meta ID',
    dataIndex: 'metaID',
    key: 'metaID',
    width: '35%',
  },
  {
    title: 'Registered on',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: '10%',
  }
];

columns.topicColumns = [
  {
    title: 'Topic ID',
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: 'Issuer',
    dataIndex: 'issuer',
    key: 'issuer',
    width: '30%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '25%',
  },
  {
    title: 'Explanation',
    dataIndex: 'explanation',
    key: 'explanation',
    width: '25%',
  },
  {
    title: 'Registered on',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: '10%',
  }
];

columns.achievementColumns = [
  {
    title: 'Creator',
    dataIndex: 'creator',
    key: 'creator',
    width: '30%%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '20%',
  },
  {
    title: 'Explanation',
    dataIndex: 'explanation',
    key: 'explanation',
    width: '35%',
  },
  {
    title: 'Reward',
    dataIndex: 'reward',
    key: 'reward',
    width: '10%',
  },
  {
    title: 'Registered on',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: '10%',
  }
];

columns.userDetailColumns = [
  {
    title: 'Topic Created',
    dataIndex: 'topic',
    key: 'topic',
    width: '10%',
  },
  {
    title: 'Achievement Created',
    dataIndex: 'achievement',
    key: 'achievement',
    width: '10%',
  }
]

columns.achievementDetailColumns = [
  {
    title: 'Topic No',
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '20%',
  },
  {
    title: 'Issuer',
    dataIndex: 'issuer',
    key: 'issuer',
    width: '40%',
  },
]

export {columns}