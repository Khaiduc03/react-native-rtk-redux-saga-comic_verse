import {ConversationI} from '../../../../redux';

export type ItemProps = {
  item: ConversationI;
  onPress: () => void;
};

export const listConversations: ConversationI[] = [
  {
    uuid: '37906306-cf75-43c6-a002-2e281594e739',
    user_uuid: 'eeb6f91e-8be6-435b-b8d9-d24a4b08af82',
    updated_at: '21:42',
    deleted_at: null,
    joined_uuid: '346bbe7f-028b-4187-a3ea-d00837bac82f',
    last_message_uuid: 'b6aff79b-a9fe-49b8-87d6-64ff5d1f49ca',
    your_name: 'Petey',
    joined_name: 'Petey Rudge',
    status: true,
    joined_url: 'https://robohash.org/cumvelitenim.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/utsuscipitsint.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    last_message_time: '2023-04-25 01:58:43',
    created_at: '2023-11-10 03:46:54',
  },
  {
    uuid: '7ff5bd0d-173a-49f6-945a-d367da165a9c',
    user_uuid: '6a890b99-8f0b-4602-9aa4-5a629e6f3a3a',
    updated_at: '6:50',
    deleted_at: null,
    joined_uuid: 'c7287cf4-4970-41f8-ae48-33db816d96a2',
    last_message_uuid: 'f4e6005c-6323-4e49-b848-bf7639a56f45',
    your_name: 'Werner',
    joined_name: 'Werner Cucuzza',
    status: false,
    joined_url:
      'https://robohash.org/evenietquoveniam.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/sedsimiliquevoluptatem.jpg?size=120x120&set=set1',
    last_sender_name: 'Joined',
    message:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    last_message_time: '2023-10-30 03:51:20',
    created_at: '2022-11-30 14:17:05',
  },
  {
    uuid: 'a0cf024a-09b0-45c4-b99e-4b9564090c41',
    user_uuid: '03bf3f9c-ff65-4cbd-ac43-907903c35db7',
    updated_at: '11:29',
    deleted_at: null,
    joined_uuid: 'a03bdf08-5aaa-4772-9edb-0d1544ffe3b8',
    last_message_uuid: '8dca2d86-6f0b-4556-b5d3-a1c5105568db',
    your_name: 'Aldo',
    joined_name: 'Aldo Liccardo',
    status: true,
    joined_url:
      'https://robohash.org/aspernaturrepudiandaeea.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/magnamatquetotam.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    last_message_time: '2023-02-21 14:41:30',
    created_at: '2023-06-28 04:46:58',
  },
  {
    uuid: '09fd1bba-e274-4458-bf8a-260390e56be2',
    user_uuid: '977c39b1-76a2-4a2a-830a-8c97eb110a42',
    updated_at: '5:30',
    deleted_at: null,
    joined_uuid: 'd12181e9-7f01-40d7-8be3-e25416d74332',
    last_message_uuid: 'f43f16ec-e3ba-49f1-9f23-adcfa3310d0c',
    your_name: 'Charlton',
    joined_name: 'Charlton Vasyukov',
    status: false,
    joined_url:
      'https://robohash.org/eosdebitisprovident.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/enimconsequunturmollitia.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    last_message_time: '2023-05-27 23:14:40',
    created_at: '2023-07-28 20:00:17',
  },
  {
    uuid: '6b8c9489-b343-43b8-867f-a4d8c8ab46e9',
    user_uuid: '44576b66-60f9-4d0e-aafa-363f1a03afcc',
    updated_at: '15:42',
    deleted_at: null,
    joined_uuid: '4540a31b-f43d-4a1f-a611-ca1ab8a5c160',
    last_message_uuid: '27a0975d-26d6-4018-9d31-984e78f905a0',
    your_name: 'Kinna',
    joined_name: 'Kinna Rustan',
    status: false,
    joined_url:
      'https://robohash.org/solutaquosrepellendus.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/corruptiprovidentrepellat.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    last_message_time: '2023-06-08 03:11:22',
    created_at: '2023-10-25 18:44:10',
  },
  {
    uuid: '4cd97075-2d31-4933-a878-86ad074e74d0',
    user_uuid: 'e17fc560-4347-4937-8bb5-5c38ac1b7e64',
    updated_at: '2:27',
    deleted_at: null,
    joined_uuid: 'a637a0e0-01f7-4788-8624-873320198acd',
    last_message_uuid: '61905e1f-7f68-430f-a199-c3bb0aa0c3d0',
    your_name: 'Theo',
    joined_name: 'Theo Wastie',
    status: true,
    joined_url:
      'https://robohash.org/sedenimvoluptatum.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/esterroreos.jpg?size=120x120&set=set1',
    last_sender_name: 'Joined',
    message: 'Vivamus vestibulum sagittis sapien.',
    last_message_time: '2023-05-25 10:29:30',
    created_at: '2023-06-18 15:21:05',
  },
  {
    uuid: '0fcbcb74-1042-4d76-a3c1-091c5a64b6e2',
    user_uuid: '1b6d08c3-b2ea-4e7c-a4a7-1c72c4ed8daa',
    updated_at: '7:31',
    deleted_at: null,
    joined_uuid: '2c480c2b-9c84-40f4-bfd0-88b2b0800115',
    last_message_uuid: '82a15daf-c560-46f7-8fd6-41b1480292cf',
    your_name: 'Liam',
    joined_name: 'Liam Leuren',
    status: true,
    joined_url: 'https://robohash.org/itaqueametaut.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/veleaquevoluptas.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    last_message_time: '2023-03-23 03:31:57',
    created_at: '2023-04-06 00:09:22',
  },
  {
    uuid: 'b7573a34-5896-459d-95b8-9c53730bb4b2',
    user_uuid: '3526d6c4-fa18-4cbd-8c4f-8937617db128',
    updated_at: '15:02',
    deleted_at: null,
    joined_uuid: 'b11a91e8-332e-451a-8b5a-ac9e5b9b4c71',
    last_message_uuid: 'fb543c8d-2e4f-44a7-a9d7-3e4b265feaff',
    your_name: 'Erinna',
    joined_name: 'Erinna Snaith',
    status: false,
    joined_url:
      'https://robohash.org/aliaseosoccaecati.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/temporadistinctioautem.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    last_message_time: '2023-08-20 09:21:52',
    created_at: '2022-12-20 15:56:40',
  },
  {
    uuid: '17926e9c-2e90-428e-998e-df1f29ef548a',
    user_uuid: '2705bf2a-0d60-43e3-a347-13f56cfe6aaa',
    updated_at: '21:55',
    deleted_at: null,
    joined_uuid: '6c7e4142-34e8-4cfb-9809-8b85c6a65ac5',
    last_message_uuid: '7bb18d17-1395-49d4-a1e6-5fe00f937e91',
    your_name: 'Corine',
    joined_name: 'Corine Easton',
    status: true,
    joined_url:
      'https://robohash.org/quibusdamenimodit.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/voluptasmolestiaeut.jpg?size=120x120&set=set1',
    last_sender_name: 'Joined',
    message:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    last_message_time: '2023-05-25 03:53:05',
    created_at: '2023-01-10 20:08:21',
  },
  {
    uuid: 'fa84bd7b-62c7-4480-a3a8-27fb80f6e759',
    user_uuid: '91454618-341a-4971-8837-dbd94d9973e4',
    updated_at: '1:07',
    deleted_at: null,
    joined_uuid: '19e858ec-0931-4bbe-9608-6b033f30d81c',
    last_message_uuid: '35451aba-cb50-446e-97e0-2282774a4fb3',
    your_name: 'Berty',
    joined_name: 'Berty Bernardoux',
    status: false,
    joined_url:
      'https://robohash.org/delenitialiastempora.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/similiqueinciduntenim.jpg?size=120x120&set=set1',
    last_sender_name: 'Joined',
    message:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    last_message_time: '2023-05-25 22:14:42',
    created_at: '2023-02-26 14:53:49',
  },
  {
    uuid: '7788ef29-5c14-47af-9ab6-258036241d21',
    user_uuid: '9fa0a545-d12a-4b30-93da-261e313bd6aa',
    updated_at: '21:13',
    deleted_at: null,
    joined_uuid: '6423ef8a-47c6-4e5c-a1db-0fce543198b9',
    last_message_uuid: 'f2c43ede-e53f-4257-b07b-da6f12740fcd',
    your_name: 'Bartholomeus',
    joined_name: 'Bartholomeus Quinn',
    status: true,
    joined_url:
      'https://robohash.org/corporislaboriosamimpedit.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/utreprehenderiterror.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    last_message_time: '2023-02-27 02:02:27',
    created_at: '2023-08-09 20:03:18',
  },
  {
    uuid: 'e9273cdd-fae1-46e5-a4f9-ce5db1430469',
    user_uuid: '6d4e8b66-9d3e-44bd-89e4-68c1ef3702cf',
    updated_at: '15:05',
    deleted_at: null,
    joined_uuid: '745390c3-b36d-4457-822f-909d085487c2',
    last_message_uuid: 'a906c96e-bab4-471a-ad4b-8494d11d4793',
    your_name: 'Bron',
    joined_name: 'Bron Bartusek',
    status: true,
    joined_url:
      'https://robohash.org/quodsuntcorrupti.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/liberooccaecatiharum.jpg?size=120x120&set=set1',
    last_sender_name: 'Joined',
    message:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    last_message_time: '2023-10-11 08:20:33',
    created_at: '2023-05-06 07:28:01',
  },
  {
    uuid: '4a266351-722c-4960-9416-ff3b45ad81e3',
    user_uuid: '7a5d575d-7cc8-4ed5-bc56-e2465bc69147',
    updated_at: '22:06',
    deleted_at: null,
    joined_uuid: 'a995b613-bb65-42f6-9830-caa0e9ba756c',
    last_message_uuid: 'd9a9d1d3-8360-4cae-abef-18abafbab8af',
    your_name: 'Therine',
    joined_name: 'Therine Olivi',
    status: true,
    joined_url: 'https://robohash.org/molestiaeinqui.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/eosestminus.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    last_message_time: '2023-02-28 17:29:00',
    created_at: '2023-01-03 04:58:28',
  },
  {
    uuid: '7fd222a4-a293-4c4f-90c3-2370c2403826',
    user_uuid: 'c6ba1ac9-a334-4d1e-b678-769687088f61',
    updated_at: '3:20',
    deleted_at: null,
    joined_uuid: '78e7f672-6ea7-492e-865f-9099492c1170',
    last_message_uuid: 'f240e6b4-07ac-47b1-8b24-b4ec475229dc',
    your_name: 'Melamie',
    joined_name: 'Melamie Davidof',
    status: false,
    joined_url:
      'https://robohash.org/eiusautsuscipit.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/numquamnesciunteos.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    last_message_time: '2023-05-07 11:24:52',
    created_at: '2023-10-27 13:42:53',
  },
  {
    uuid: '516bd8f9-4eca-4118-a308-1c4a7a313e05',
    user_uuid: '311fe9f6-43e0-4b63-99c7-205c6b7601e2',
    updated_at: '22:53',
    deleted_at: null,
    joined_uuid: '502329e5-e972-4a7f-bfb2-023ff3935dbe',
    last_message_uuid: '0360bd14-aad2-4ee6-b792-858d12cd7ec1',
    your_name: 'Cedric',
    joined_name: 'Cedric Rubi',
    status: false,
    joined_url: 'https://robohash.org/estmaximererum.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/sedauteaque.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    last_message_time: '2023-07-31 10:08:49',
    created_at: '2023-09-16 10:03:31',
  },
  {
    uuid: '7f0f1c8f-603f-489f-822c-49ccdcb83e75',
    user_uuid: 'd67f2686-e193-4359-a1cc-176e1aebc801',
    updated_at: '16:07',
    deleted_at: null,
    joined_uuid: '1916c73a-cc8c-426b-b8b3-f98352b11c07',
    last_message_uuid: 'c4eeb8d3-558c-4d2c-b9bb-a467d43bf354',
    your_name: 'Zondra',
    joined_name: 'Zondra Molohan',
    status: false,
    joined_url:
      'https://robohash.org/eaautperspiciatis.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/inventoresolutased.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    last_message_time: '2023-07-23 14:53:57',
    created_at: '2023-09-09 11:24:57',
  },
  {
    uuid: 'b8fc045b-9054-4ddf-8df8-eec1cef35ee6',
    user_uuid: 'b3e93d48-630c-4705-941f-a66ee42bd403',
    updated_at: '20:21',
    deleted_at: null,
    joined_uuid: '016ee1f2-b42c-4147-8ac0-9dc790391c84',
    last_message_uuid: 'e612326f-5ce7-42f0-832e-11444ead5498',
    your_name: 'Eamon',
    joined_name: 'Eamon Fevers',
    status: true,
    joined_url:
      'https://robohash.org/doloremnobisconsequatur.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/eumautaperiam.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    last_message_time: '2023-04-04 00:53:27',
    created_at: '2023-04-28 13:15:30',
  },
  {
    uuid: '4430aed5-1a6e-463d-9612-9c79700cebe8',
    user_uuid: 'e099119b-6c03-4e9d-ae33-73d20b76ce3a',
    updated_at: '18:07',
    deleted_at: null,
    joined_uuid: 'ff85f612-845f-46b1-b2f2-591db10e7705',
    last_message_uuid: 'c12038ab-8545-4805-ba72-1c80a09a2ba7',
    your_name: 'Horst',
    joined_name: 'Horst Kedward',
    status: false,
    joined_url:
      'https://robohash.org/maioresdignissimossed.jpg?size=120x120&set=set1',
    your_url:
      'https://robohash.org/aliquamquosdolore.jpg?size=120x120&set=set1',
    last_sender_name: 'Joined',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    last_message_time: '2023-05-07 04:55:33',
    created_at: '2023-10-03 19:41:29',
  },
  {
    uuid: '5122648b-4da9-4c9e-b068-70d3cdcfebb0',
    user_uuid: '86d4a674-f22e-49b3-8a0a-9febd610ee4a',
    updated_at: '9:42',
    deleted_at: null,
    joined_uuid: '979ac4f0-a32d-4fe0-b53b-55158530dd8b',
    last_message_uuid: '460c5d57-670f-4bb8-b422-4038e99feea7',
    your_name: 'Matti',
    joined_name: 'Matti Dowbiggin',
    status: false,
    joined_url: 'https://robohash.org/illoutsequi.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/molestiaeutqui.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    last_message_time: '2023-06-25 06:12:55',
    created_at: '2023-01-02 02:27:39',
  },
  {
    uuid: 'a01a8387-26d3-4957-af6c-a0e8c250c94a',
    user_uuid: '98fc7c61-b9e1-42f7-a77a-160d17a155e0',
    updated_at: '20:40',
    deleted_at: null,
    joined_uuid: '7b276c91-43b2-4fd7-9969-5f86574c0fc0',
    last_message_uuid: '2f2db199-3c56-47f4-8c31-dff5759a51ea',
    your_name: 'Maximo',
    joined_name: 'Maximo MacCallion',
    status: false,
    joined_url:
      'https://robohash.org/omnisetpariatur.jpg?size=120x120&set=set1',
    your_url: 'https://robohash.org/officiisquasnon.jpg?size=120x120&set=set1',
    last_sender_name: 'You',
    message: 'Etiam justo. Etiam pretium iaculis justo.',
    last_message_time: '2023-07-17 13:19:59',
    created_at: '2023-06-28 13:41:11',
  },
];
