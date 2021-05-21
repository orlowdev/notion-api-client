import { NotionBlock } from "./block"
import { NotionObject, NotionUUID, NotionParentType } from "./common"
import { NotionProperty } from "./property"

export interface NotionPage {
	object: NotionObject.PAGE
	id: NotionUUID
	created_time: Date
	last_edited_time: Date
	parent: {
		type: NotionParentType.DATABASE_ID
		[NotionParentType.DATABASE_ID]: NotionUUID
	}
	archived: boolean
	properties: NotionProperty[]
}

export type NotionPageWithChildren = NotionPage & { children: NotionBlock[] }
