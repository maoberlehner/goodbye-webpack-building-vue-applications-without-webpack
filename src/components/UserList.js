const UserInfo = () => import('./UserInfo.js');

export default {
  name: `UserList`,
  components: {
    UserInfo,
  },
  data() {
    return {
      users: [
        {
          img: `https://placeimg.com/50/50/people/1`,
          name: `Kentigern Paul`,
          department: `Development`,
          info: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.`,
          showInfo: false,
        },
        {
          img: `https://placeimg.com/50/50/people/2`,
          name: `Trecia Rio`,
          department: `Development`,
          info: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.`,
          showInfo: false,
        },
        {
          img: `https://placeimg.com/50/50/people/3`,
          name: `Baldr Keira`,
          department: `Sales`,
          info: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.`,
          showInfo: false,
        },
      ],
    };
  },
  template: `
    <ul class="list-reset">
      <li v-for="user in users" :key="user.name" class="flex items-start mb-6">
        <img :src="user.img" :alt="user.name" class="rounded-full mr-4">
        <div>
          <h3 class="text-black">{{ user.name }}</h3>
          <p class="text-grey-dark mb-2">{{ user.department }}</p>
          <button
            class="bg-blue hover:bg-blue-dark text-white py-1 px-2 rounded"
            @click="user.showInfo = !user.showInfo"
          >
            {{ !user.showInfo ? 'Learn more' : 'Less' }}
          </button>
          <user-info v-if="user.showInfo" class="mt-2">
            {{ user.info }}
          </user-info>
        </div>
      </li>
    </ul>
  `,
};
