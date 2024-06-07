interface getEndDaysProps{
    start:string,
    end:string
}
export function getEndDays({start,end}:getEndDaysProps):string{
    const startDate=new Date(start);
    const endDate=new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const differenceInMs=Math.abs(startDate-endDate)
    const days = Math.round(differenceInMs / oneDay); // Convert back to days and round

    return days.toString();
}