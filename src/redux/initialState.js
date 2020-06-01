export const initialState = {
  currentUser: {
    id: '1',
    isAdmin: false,
    name: 'Adam',
    email: 'aaa@bb.eu',
    phone: '888-777-666',
  },
  isLogged: true,
  posts: {
    data: [
      // {
      //   id: '1',
      //   title: 'Announcement title 1',
      //   text: 'This is a description. You can use this section to describe the content',
      //   created: '2019-01-05T16:35:17.000Z',
      //   updated: '2019-01-05T16:35:17.000Z',
      //   author: 'aaa@bb.eu',
      //   status: 'published',
      //   price: 5,
      //   phone: '888-777-666',
      //   photo: 'https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_960_720.jpg',
      //   location: null,
      // },
      // {
      //   id: '2',
      //   title: 'Announcement title 2',
      //   text: 'This is a description. You can use this section to describe the content',
      //   created: '2019-01-05T16:35:17.000Z',
      //   updated: '2019-01-05T16:35:17.000Z',
      //   author: 'aaa@bb.eu',
      //   status: 'published',
      //   price: 13,
      //   phone: '888-777-666',
      //   photo: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_960_720.jpg',
      //   location: null,
      // },
      // {
      //   location: null,
      //   id: '3',
      //   title: 'Announcement title 3',
      //   text: 'This is a description. You can use this section to describe the content',
      //   author: 'aaa@bb.eu',
      //   status: 'draft',
      //   price: 125,
      //   phone: '888-777-666',
      //   photo: 'https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_960_720.jpg',
      // },
      // {
      //   id: '4',
      //   title: 'Announcement title 4',
      //   description: 'This is a description. You can use this section to describe the content',
      //   publicationDate: '2020-04-20',
      //   lastUpdate: '2020-05-19',
      //   authorEmail: 'ddd@eee.pl',
      //   authorId: '2',
      //   authorName: 'Eva',
      //   status: 'draft',
      //   price: 98,
      //   phone: '111-222-333',
      //   image: 'https://cdn.pixabay.com/photo/2016/12/12/15/30/dodge-charger-1901806_960_720.jpg',
      //   imageTitle: 'Image title1',
      // },
      // {
      //   id: '5',
      //   title: 'Announcement title 5',
      //   description: 'This is a description. You can use this section to describe the content',
      //   publicationDate: '2020-04-20',
      //   lastUpdate: '2020-05-19',
      //   authorEmail: 'ddd@eee.pl',
      //   authorId: '2',
      //   authorName: 'Eva',
      //   status: 'draft',
      //   price: 57,
      //   phone: '111-222-333',
      //   image: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377_960_720.jpg',
      //   imageTitle: 'Image title1',
      // },
      // {
      //   id: '6',
      //   title: 'Announcement title 6',
      //   description: 'This is a description. You can use this section to describe the content',
      //   publicationDate: '2020-04-20',
      //   lastUpdate: '2020-05-19',
      //   authorEmail: 'ddd@eee.pl',
      //   authorId: '2',
      //   authorName: 'Eva',
      //   status: 'draft',
      //   price: 15,
      //   phone: '111-222-333',
      //   image: 'https://cdn.pixabay.com/photo/2018/10/31/19/43/books-3786559_960_720.jpg',
      //   imageTitle: 'Image title1',
      // },

    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
