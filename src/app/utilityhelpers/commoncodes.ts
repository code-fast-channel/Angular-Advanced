export function getSpecificValueArrayOfObject(array:any,field:any) {
    return array.map((gs:any)=>gs[field]);
}