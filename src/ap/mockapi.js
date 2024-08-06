const items = [
    {
      createdAt: "2024-07-01T13:31:21.051Z",
      item: "item 1",
      image_url: "https://via.placeholder.com/150", 
      price: 16,
      shipping_method: "Same Day Shipping",
      id: "1"
    },
    {
      createdAt: "2024-06-30T16:25:38.372Z",
      item: "item 2",
      image_url: "https://via.placeholder.com/150",
      price: 10,
      shipping_method: "Same Day Shipping",
      id: "2"
    },
    {
        "createdAt": "2024-06-30T14:27:08.542Z",
        "item": "item 3",
        "image_url": "https://placehold.co/50x50.png",
        "price": 82,
        "shipping_method": null,
        "id": "3"
      },
      {
        "createdAt": "2024-07-01T03:39:43.992Z",
        "item": "item 4",
        "image_url": "https://placehold.co/50x50.png",
        "price": 94,
        "shipping_method": "Same Day Shipping",
        "id": "4"
      },
      {
        "createdAt": "2024-07-01T04:45:48.368Z",
        "item": "item 5",
        "image_url": "https://placehold.co/50x50.png",
        "price": 13,
        "shipping_method": "Same Day Shipping",
        "id": "5"
      },
      {
        "createdAt": "2024-07-01T01:51:34.268Z",
        "item": "item 6",
        "image_url": "https://placehold.co/50x50.png",
        "price": 50,
        "shipping_method": null,
        "id": "6"
      },
      {
        "createdAt": "2024-07-01T03:27:01.009Z",
        "item": "item 7",
        "image_url": "https://placehold.co/50x50.png",
        "price": 33,
        "shipping_method": null,
        "id": "7"
      },
      {
        "createdAt": "2024-07-01T08:17:42.536Z",
        "item": "item 8",
        "image_url": "https://placehold.co/50x50.png",
        "price": 62,
        "shipping_method": "Same Day Shipping",
        "id": "8"
      },
      {
        "createdAt": "2024-07-01T05:24:39.813Z",
        "item": "item 9",
        "image_url": "https://placehold.co/50x50.png",
        "price": 47,
        "shipping_method": null,
        "id": "9"
      },
      {
        "createdAt": "2024-07-01T12:59:43.276Z",
        "item": "item 10",
        "image_url": "https://placehold.co/50x50.png",
        "price": 0,
        "shipping_method": "Same Day Shipping",
        "id": "10"
      },
      {
        "createdAt": "2024-07-01T06:07:39.347Z",
        "item": "item 11",
        "image_url": "https://placehold.co/50x50.png",
        "price": 80,
        "shipping_method": null,
        "id": "11"
      }
  ];
  
  export const fetchItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(items), 500);
    });
  };
  
  export const addItem = (item) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        items.push(item);
        resolve(item);
      }, 500);
    });
  };
  
