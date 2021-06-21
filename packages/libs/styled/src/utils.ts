type PropsWithClassName = { readonly className: string };
export function getClassName<TProps>( props: TProps ): string {
  return ( props as unknown as PropsWithClassName ).className ? ( props as unknown as PropsWithClassName ).className : "";
}
