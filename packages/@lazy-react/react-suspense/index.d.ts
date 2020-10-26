import { ExoticComponent, SuspenseProps, ReactNode } from 'react';
export interface ISuspenseProps extends Omit<SuspenseProps, 'fallback'> {
    /**
     * A fallback react tree to show when a Suspense child (like React.lazy) suspends
     */
    fallback?: SuspenseProps["fallback"];
    /**
     * content for ssr render
     */
    content?: NonNullable<ReactNode> | null;
}
export declare const ReactSuspense: ExoticComponent<ISuspenseProps>;
export default ReactSuspense;
