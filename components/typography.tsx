
export function TypographyH1({children}:IHeaderProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
     {children}
    </h1>
  )
}


export function TypographyH2({children}:IHeaderProps) {

    return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
       {children}
      </h2>
    )
  }

  export function TypographyH3({children}:IHeaderProps) {
    return (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    )
  }

  export function TypographyP({children}:IHeaderProps) {
    return (
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        {children}
      </p>
    )
  }

