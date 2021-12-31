import { h } from 'gridjs';
import { RowSelectionStore } from './store';
import { Row } from 'gridjs';
import { PluginBaseComponent, PluginBaseProps } from 'gridjs';
import { Cell } from 'gridjs';
interface RowSelectionState {
    isChecked: boolean;
}
interface RowSelectionProps {
    id: (row: Row) => string;
    row?: Row;
    cell?: Cell;
    store?: RowSelectionStore;
    selectedClassName?: string;
    checkboxClassName?: string;
}
export declare class RowSelection extends PluginBaseComponent<RowSelectionProps & PluginBaseProps<RowSelection>, RowSelectionState> {
    private readonly actions;
    private readonly store;
    private readonly storeUpdatedFn;
    private isDataCell;
    private getParentTR;
    static defaultProps: {
        selectedClassName: string;
        checkboxClassName: string;
    };
    constructor(props: RowSelectionProps & PluginBaseProps<RowSelection>, context: any);
    componentWillUnmount(): void;
    componentDidMount(): void;
    private storeUpdated;
    private check;
    private uncheck;
    private toggle;
    render(): h.JSX.Element;
}
export {};
