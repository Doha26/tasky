import {ContentType} from "~/utils/model/Content";

export interface ContentReducer {
    loading:boolean,
    contents:Array<ContentType>
}
