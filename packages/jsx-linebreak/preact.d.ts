import PReact from 'preact';
export declare const LinkBreak: <T extends ({
    children: any;
} & {
    br?: boolean;
}) | ({
    children?: any;
} & {
    br?: boolean;
}) = ({
    children: any;
} & {
    br?: boolean;
}) | ({
    children?: any;
} & {
    br?: boolean;
}), V extends PReact.VNode<any> = PReact.VNode<any>>({ children, br, ...props }: T) => PReact.VNode<any>;
export default LinkBreak;
