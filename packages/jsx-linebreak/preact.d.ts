import PReact from 'preact';
export declare const LinkBreak: <T extends ({
    children?: string;
} & {
    noBR?: boolean;
    onlyBR?: boolean;
}) | ({
    children: any;
} & {
    noBR?: boolean;
    onlyBR?: boolean;
}) | ({
    children?: any;
} & {
    noBR?: boolean;
    onlyBR?: boolean;
}) = ({
    children?: string;
} & {
    noBR?: boolean;
    onlyBR?: boolean;
}) | ({
    children: any;
} & {
    noBR?: boolean;
    onlyBR?: boolean;
}) | ({
    children?: any;
} & {
    noBR?: boolean;
    onlyBR?: boolean;
}), V extends PReact.VNode<any> = PReact.VNode<any>>({ children, noBR, onlyBR, ...props }: T) => PReact.VNode<any>;
export declare const BR: ({ key, ref, ...props }: {
    key?: any;
    ref?: any;
}) => PReact.VNode<any>;
export default LinkBreak;
