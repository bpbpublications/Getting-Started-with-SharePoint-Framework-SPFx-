import { ISPList } from './HelloWorldWebPart';

export default class SampleData  {

    private static _items: ISPList[] = [{ Title: 'Mock Data 1', Id: '1' },
                                        { Title: 'Mock Data 2', Id: '2' },
                                        { Title: 'Mock Data 3', Id: '3' }];

    public static get(): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
            resolve(SampleData._items);
        });
    }
}
