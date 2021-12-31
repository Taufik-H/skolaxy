import { BaseStore } from 'gridjs';
import { RowSelectionActionsType } from './actions';
export declare type RowSelectionStoreState = {
    rowIds: string[];
};
export declare class RowSelectionStore extends BaseStore<RowSelectionStoreState, RowSelectionActionsType> {
    getInitialState(): RowSelectionStoreState;
    handle(type: any, payload: any): void;
    private check;
    private uncheck;
}
