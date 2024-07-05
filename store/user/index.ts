import { defineStore } from 'pinia';
import type { UserStoreStateInterface } from '~/interface/store/user/user-store-state.interface';
export const useUserStore = defineStore('user', {
    state: (): UserStoreStateInterface => {
        return {
            id: 0,
            name: '',
            email: '',
            location: '',
            avatar: '',
            role: '',
            phone: '',
            description: '',
        };
    },
    actions: {
        setUser(user: UserStoreStateInterface) {
            this.id = user.id;
            this.name = user.name;
            this.email = user.email;
            this.location = user.location;
            this.avatar = user.avatar;
            this.role = user.role;
            this.phone = user.phone;
            this.description = user.description;
        },
        resetUser() {
            this.id = 0;
            this.name = '';
            this.email = '';
            this.location = '';
            this.avatar = '';
            this.role = '';
            this.phone = '';
            this.description = '';
        },
    },
});
