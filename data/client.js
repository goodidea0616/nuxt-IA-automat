const Items = [
    {
        uuid: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
        name: "Doc1",
        date: "2020-04-09",
        kbis: "Kbis",
        alist: "Alist",
        state: "Complete"
    },
    {
      uuid: "ee272550-36e8-4fe2-889d-c1ee701c5863",
      name: "Doc2",
      date: "2020-04-09",
      kbis: "Kbis",
      alist: "Alist",
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
  