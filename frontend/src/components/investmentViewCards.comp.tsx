export const StudentViewDetailCard = ({data, children, title}:{title: string, data:string, children: React.ReactNode})=> {
  return <div className="flex items-start gap-2">
  <div className="text-primary">
    {children}
  </div>
  <div className="leading-none flex flex-col gap-2">
    <p className="font-semibold">{title}</p>
    <p className="text-muted-foreground">{data}</p>
  </div>
  </div>
}

export const StudentViewSkillCard =({skill, color, rating}:{skill:string, rating: number, color: string})=>{
  return    <div className="w-full flex flex-col gap-2">
    <div className="flex justify-between gap-4 w-full">
  <p className="font-medium">{skill}</p>
  <p>{`${rating.toFixed(2)}%`} </p>
    </div>
  <div className="w-full bg-muted rounded-full overflow-hidden">
    <div className="h-2" style={{width:rating > 100 ? "100%": `${rating}%`, backgroundColor:color}}></div>

  </div>
</div>
}
