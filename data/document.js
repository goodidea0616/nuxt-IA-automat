const Items = [
    {
        uuid: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
        name: "Doc1",
        date: "2020-04-09",
        client: "EILEMA",
        state: "Complete"
    },
    {
        uuid: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
        name: "Doc2",
        date: "2020-04-09",
        client: "EILEMA",
        state: "Complete"
    },
    {
        uuid: "14ddae1e-986d-42f4-8d17-46a02d469b2b",
        name: "Doc3",
        date: "2020-04-09",
        client: "EILEMA",
        state: "Incomplete"
    },{
        uuid: "6a03248b-1752-4332-a3a9-7108528cc9d3",
        name: "Doc4",
        date: "2020-04-09",
        client: "IA-AUTOMAT",
        state: "Complete"
    },{
        uuid: "ee272550-36e8-4fe2-889d-c1ee701c5863",
        name: "Doc5",
        date: "2020-04-09",
        client: "EILEMA",
        state: "Complete"
    },{
        uuid: "77f4b102-9df5-43ba-966a-6f816806c5e2",
        name: "Doc6",
        date: "2020-04-09",
        client: "EILEMA",
        state: "Complete"
    },{
        uuid: "36a1ead7-57a0-4275-8a21-956194ab7cdf",
        name: "Doc7",
        date: "2020-04-09",
        client: "EILEMA",
        state: "Incomplete"
    }
  ];
  
  const getUserById = uuid => {
    return uuid === undefined ? Items[0] : Items.find(x => x.uuid === uuid);
  };
  
  const getUser = limit => {
    return limit ? Items.slice(0, limit) : Items;
  };
  
  export { Items, getUser, getUserById };
  