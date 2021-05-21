import { NotionBlock, NotionBlockType } from "./block"
import {
	NotionUUID,
	NotionDate,
	NotionUser,
	NotionDataType,
	NotionBoolean,
	NotionString,
	NotionColor,
	NotionNumber,
} from "./common"

export type NotionPropertyID = string

type NotionProp<
	TYPE extends NotionPropertyType,
	T extends Record<string, any>,
> = Record<string, { id: NotionPropertyID; type: TYPE } & T>

interface NotionSelectItem {
	id: NotionUUID
	name: string
	color: NotionColor
}

export enum NotionPropertyType {
	TITLE = "title",
	SELECT = "select",
	MULTI_SELECT = "multi_select",
	PEOPLE = "people",
	DATE = "date",
	RICH_TEXT = "rich_text",
	FILES = "files",
	PHONE_NUMBER = "phone_number",
	CREATED_BY = "created_by",
	NUMBER = "number",
	LAST_EDITED_BY = "last_edited_by",
	ROLLUP = "rollup",
	RELATION = "relation",
	LAST_EDITED_TIME = "last_edited_time",
	CHECKBOX = "checkbox",
	FORMULA = "formula",
	EMAIL = "email",
	URL = "url",
	CREATED_TIME = "created_time",
}

export type NotionRollupValue =
	| { [NotionPropertyType.TITLE]: NotionTitle[] }
	| { [NotionPropertyType.SELECT]: NotionSelect[] }
	| { [NotionPropertyType.MULTI_SELECT]: NotionMultiSelect[] }
	| { [NotionPropertyType.PEOPLE]: NotionPeople[] }
	| { [NotionPropertyType.DATE]: NotionDate[] }
	| { [NotionPropertyType.RICH_TEXT]: NotionRichText[] }
	| { [NotionPropertyType.FILES]: NotionFiles[] }
	| { [NotionPropertyType.PHONE_NUMBER]: NotionPhone[] }
	| { [NotionPropertyType.CREATED_BY]: NotionCreatedBy[] }
	| { [NotionPropertyType.NUMBER]: NotionNumber[] }
	| { [NotionPropertyType.LAST_EDITED_BY]: NotionLastEditedBy[] }
	| { [NotionPropertyType.ROLLUP]: NotionRollup[] }
	| { [NotionPropertyType.RELATION]: NotionRelation[] }
	| { [NotionPropertyType.LAST_EDITED_TIME]: NotionLastEditedTime[] }
	| { [NotionPropertyType.CHECKBOX]: NotionCheckbox[] }
	| { [NotionPropertyType.FORMULA]: NotionFormula[] }
	| { [NotionPropertyType.EMAIL]: NotionEmail[] }
	| { [NotionPropertyType.URL]: NotionUrl[] }
	| { [NotionPropertyType.CREATED_TIME]: NotionCreatedTime[] }

export const enum NotionFormulaReturnType {
	STRING = "string",
	NUMBER = "number",
	BOOLEAN = "boolean",
	DATE = "date",
}

// ------------------------------------------------------------

interface NotionSelect {
	[NotionPropertyType.SELECT]: NotionSelectItem
}

type NotionSelectProperty = NotionProp<NotionPropertyType.SELECT, NotionSelect>

// ------------------------------------------------------------

export type NotionDateProperty = NotionProp<NotionPropertyType.DATE, NotionDate>

// ------------------------------------------------------------

export interface NotionMultiSelect {
	[NotionPropertyType.MULTI_SELECT]: NotionSelectItem[]
}

export type NotionMultiSelectProperty = NotionProp<
	NotionPropertyType.MULTI_SELECT,
	NotionMultiSelect
>

// ------------------------------------------------------------

export interface NotionPeople {
	[NotionPropertyType.PEOPLE]: NotionUser[]
}

export type NotionPeopleProperty = NotionProp<
	NotionPropertyType.PEOPLE,
	NotionPeople
>

// ------------------------------------------------------------

export interface NotionTitle {
	id: "title"
	[NotionPropertyType.TITLE]: NotionBlock[]
}

export type NotionTitleProperty = NotionProp<
	NotionPropertyType.TITLE,
	NotionTitle
>

// ------------------------------------------------------------

export interface NotionRichText {
	[NotionPropertyType.RICH_TEXT]: NotionBlockType[]
}

export type NotionRichTextProperty = NotionProp<
	NotionPropertyType.RICH_TEXT,
	NotionRichText
>

// ------------------------------------------------------------

export interface NotionFiles {
	[NotionPropertyType.FILES]: Record<"name", string>[]
}

export type NotionFilesProperty = NotionProp<
	NotionPropertyType.FILES,
	NotionFiles
>

// ------------------------------------------------------------

export interface NotionPhone {
	[NotionPropertyType.PHONE_NUMBER]: string
}

export type NotionPhoneProperty = NotionProp<
	NotionPropertyType.PHONE_NUMBER,
	NotionPhone
>

// ------------------------------------------------------------

export interface NotionCreatedBy {
	[NotionPropertyType.CREATED_BY]: NotionUser
}

export type NotionCreatedByProperty = NotionProp<
	NotionPropertyType.CREATED_BY,
	NotionCreatedBy
>

// ------------------------------------------------------------

export type NotionNumberProperty = NotionProp<
	NotionPropertyType.NUMBER,
	NotionNumber
>

// ------------------------------------------------------------

export interface NotionLastEditedBy {
	[NotionPropertyType.LAST_EDITED_BY]: NotionUser
}

export type NotionLastEditedByProperty = NotionProp<
	NotionPropertyType.LAST_EDITED_BY,
	NotionLastEditedBy
>

// ------------------------------------------------------------

export interface NotionRollup {
	[NotionPropertyType.ROLLUP]:
		| ({
				type: NotionDataType.ARRAY
		  } & NotionRollupValue)
		| { type: NotionDataType.NUMBER; [NotionDataType.NUMBER]: NotionNumber }
		| { type: NotionDataType.DATE; [NotionDataType.DATE]: NotionDate }
}

export type NotionRollupProperty = NotionProp<
	NotionPropertyType.ROLLUP,
	NotionRollup
>

// ------------------------------------------------------------

export interface NotionRelation {
	[NotionPropertyType.RELATION]: Array<{ id: NotionUUID }>
}

export type NotionRelationProperty = NotionProp<
	NotionPropertyType.RELATION,
	NotionRelation
>

// ------------------------------------------------------------

export interface NotionLastEditedTime {
	[NotionPropertyType.LAST_EDITED_TIME]: Date
}

export type NotionLastEditedTimeProperty = NotionProp<
	NotionPropertyType.LAST_EDITED_TIME,
	NotionLastEditedTime
>

// ------------------------------------------------------------

export interface NotionCheckbox {
	[NotionPropertyType.CHECKBOX]: boolean
}

export type NotionCheckboxProperty = NotionProp<
	NotionPropertyType.CHECKBOX,
	NotionCheckbox
>

// ------------------------------------------------------------

export interface NotionFormula {
	[NotionPropertyType.FORMULA]:
		| NotionDate
		| NotionBoolean
		| NotionString
		| NotionNumber
}

export type NotionFormulaProperty = NotionProp<
	NotionPropertyType.FORMULA,
	NotionFormula
>

// ------------------------------------------------------------

export interface NotionEmail {
	[NotionPropertyType.EMAIL]: string
}

export type NotionEmailProperty = NotionProp<
	NotionPropertyType.EMAIL,
	NotionEmail
>

// ------------------------------------------------------------

export interface NotionUrl {
	[NotionPropertyType.URL]: string
}

export type NotionUrlProperty = NotionProp<NotionPropertyType.URL, NotionUrl>

// ------------------------------------------------------------

export interface NotionCreatedTime {
	[NotionPropertyType.CREATED_TIME]: Date
}

export type NotionCreatedTimeProperty = NotionProp<
	NotionPropertyType.CREATED_TIME,
	NotionCreatedTime
>

// ------------------------------------------------------------

export type NotionProperty =
	| NotionPeopleProperty
	| NotionMultiSelectProperty
	| NotionSelectProperty
	| NotionDateProperty
	| NotionTitleProperty
	| NotionRichTextProperty
	| NotionFilesProperty
	| NotionPhoneProperty
	| NotionCreatedByProperty
	| NotionNumberProperty
	| NotionLastEditedByProperty
	| NotionRollupProperty
	| NotionRelationProperty
	| NotionLastEditedTimeProperty
	| NotionCheckboxProperty
	| NotionFormulaProperty
	| NotionEmailProperty
	| NotionUrlProperty
	| NotionCreatedTimeProperty
