import { Nullable } from "./helpers"

export type NotionUUID = string

export const enum UserType {
	PERSON = "person",
	BOT = "bot",
}

export const enum NotionDataType {
	DATE = "date",
	PERSON = "person",
	ARRAY = "array",
	BOOLEAN = "boolean",
	STRING = "string",
	NUMBER = "number",
}

export const enum NotionColor {
	DEFAULT = "default",
	GRAY = "gray",
	BROWN = "brown",
	ORANGE = "orange",
	YELLOW = "yellow",
	GREEN = "green",
	BLUE = "blue",
	PURPLE = "purple",
	PINK = "pink",
	RED = "red",
}

export const enum NotionBackgroundColor {
	GRAY_BACKGROUND = "gray_background",
	BROWN_BACKGROUND = "brown_background",
	ORANGE_BACKGROUND = "orange_background",
	YELLOW_BACKGROUND = "yellow_background",
	GREEN_BACKGROUND = "green_background",
	BLUE_BACKGROUND = "blue_background",
	PURPLE_BACKGROUND = "purple_background",
	PINK_BACKGROUND = "pink_background",
	RED_BACKGROUND = "red_background",
}

export type NotionBlockColor = NotionColor | NotionBackgroundColor

export interface NotionUser {
	object: NotionObject.USER
	id: NotionUUID
	name: string
	avatar_url: string
	type: UserType
	[NotionDataType.PERSON]: {
		email: string
	}
}

export interface NotionBoolean {
	type: NotionDataType.BOOLEAN
	[NotionDataType.BOOLEAN]: boolean
}

export interface NotionString {
	type: NotionDataType.STRING
	[NotionDataType.STRING]: string
}

export interface NotionNumber {
	type: NotionDataType.NUMBER
	[NotionDataType.NUMBER]: number
}

export interface NotionDate {
	type: NotionDataType.DATE
	[NotionDataType.DATE]: {
		start: Date
		end: Nullable<Date>
	}
}

export const enum NotionObject {
	USER = "user",
	PAGE = "page",
	BLOCK = "block",
}

export const enum NotionParentType {
	DATABASE_ID = "database_id",
	PAGE_ID = "page_id",
	WORKSPACE = "workspace",
}
