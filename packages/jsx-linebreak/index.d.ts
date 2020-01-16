/**
 * Created by user on 2020/1/16.
 */
export declare type IPropLike<T = any> = {
    children: T;
} | {
    children?: T;
};
export declare type IWarpPropLike<T> = (T | {
    children?: string;
}) & {
    /**
     * not convert linebreak to <br/>
     */
    noBR?: boolean;
    onlyBR?: boolean;
};
export declare function createLinkBreak<P extends IPropLike, N>(createElement: (...argv: any[]) => N, Fragment: any): <T extends IWarpPropLike<P> = IWarpPropLike<P>, V extends N = N>({ children, noBR, onlyBR, ...props }: T) => N;
export declare function createBR<N>(createElement: (...argv: any[]) => N, Fragment: any): ({ key, ref, ...props }: {
    key?: any;
    ref?: any;
}) => N;
export default createLinkBreak;
