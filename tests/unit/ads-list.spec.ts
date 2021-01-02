import AdsList from '@/components/AdsList.vue';
import { mount } from '@vue/test-utils';

describe('AdsList.vue', () => {
    let component: any;
    const ad = {id: 1, title: 'An ad title', description: 'An ad description'};

    beforeEach(() => {
        // @ts-ignore
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([ad]),
        }));
    });

    beforeEach(() => {
        component = mount(AdsList, {
            propsData: {
                filter: null
            }
        });
    });

    it('contains an ad', () => {
        expect(component.vm.ads).toEqual([ad]);
    });
});
