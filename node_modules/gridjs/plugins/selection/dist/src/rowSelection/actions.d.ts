import { BaseActions } from 'gridjs';
export interface RowSelectionActionsType {
    CHECK: {
        ROW_ID: string;
    };
    UNCHECK: {
        ROW_ID: string;
    };
}
export declare class RowSelectionActions extends BaseActions<RowSelectionActionsType> {
    check(rowId: string): void;
    uncheck(rowId: string): void;
}
