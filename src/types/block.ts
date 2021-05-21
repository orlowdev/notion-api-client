import {
	NotionBlockColor,
	NotionDate,
	NotionObject,
	NotionUser,
	NotionUUID,
} from "./common"
import { Nullable } from "./helpers"

export const enum NotionBlockType {
	BULLETED_LIST_ITEM = "bulleted_list_item",
	HEADING_1 = "heading_1",
	HEADING_2 = "heading_2",
	HEADING_3 = "heading_3",
	NUMBERED_LIST_ITEM = "numbered_list_item",
	PARAGRAPH = "paragraph",
	TO_DO = "to_do",
	TOGGLE = "toggle",
	UNSUPPORTED = "unsupported",
}

export const enum NotionMentionType {
	DATE = "date",
	PAGE = "page",
	USER = "user",
	DATABSE = "database",
}

export const enum NotionContentNodeType {
	EQUATION = "equation",
	MENTION = "mention",
	TEXT = "text",
}

export interface NotionBlockAnnotations {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: NotionBlockColor
}

export type NotionBaseContentNode<T extends Record<string, any> = {}> = {
	type: NotionContentNodeType
	annotations: NotionBlockAnnotations
	plain_text: string
	href: Nullable<string>
} & T

export interface NotionTextContentNodeText {
	type: NotionContentNodeType.TEXT
	[NotionContentNodeType.TEXT]: {
		content: string
		link: Nullable<{ url: string }>
	}
}

export type NotionTextContentNode =
	NotionBaseContentNode<NotionTextContentNodeText>

export interface NotionEquationContentNodeEquation {
	type: NotionContentNodeType.EQUATION
	[NotionContentNodeType.EQUATION]: {
		expression: string
	}
}

export type NotionEquationContentNode =
	NotionBaseContentNode<NotionEquationContentNodeEquation>

export type NotionBaseMentionContentNode<T extends Record<string, any>> = {
	type: NotionContentNodeType.MENTION
	[NotionContentNodeType.MENTION]: T
}

export type NotionDateMentionContentNodeDate =
	NotionBaseMentionContentNode<NotionDate>

export type NotionDateMentionContentNode =
	NotionBaseContentNode<NotionDateMentionContentNodeDate>

export type NotionUserMentionContentNodeUser = NotionBaseMentionContentNode<{
	type: NotionMentionType.USER
	[NotionMentionType.USER]: NotionUser
}>

export type NotionUserMentionContentNode =
	NotionBaseContentNode<NotionUserMentionContentNodeUser>

export type NotionPageMentionTypeNodePage = NotionBaseMentionContentNode<{
	type: NotionMentionType.PAGE
	[NotionMentionType.PAGE]: {
		id: NotionUUID
	}
}>

export type NotionPageMentionTypeNode =
	NotionBaseContentNode<NotionPageMentionTypeNodePage>

export type NotionNode =
	| NotionTextContentNode
	| NotionEquationContentNode
	| NotionDateMentionContentNode
	| NotionUserMentionContentNode
	| NotionPageMentionTypeNode

export interface NotionBlock {
	object: NotionObject.BLOCK
	id: NotionUUID
	created_time: Date
	last_edited_time: Date
	has_children: boolean
	type: NotionBlockType
	[NotionBlockType.HEADING_1]: NotionNode[]
	[NotionBlockType.HEADING_2]: NotionNode[]
	[NotionBlockType.HEADING_3]: NotionNode[]
	[NotionBlockType.PARAGRAPH]: NotionNode[]
	[NotionBlockType.BULLETED_LIST_ITEM]: NotionNode[]
	[NotionBlockType.NUMBERED_LIST_ITEM]: NotionNode[]
	[NotionBlockType.TOGGLE]: NotionNode[]
	[NotionBlockType.TO_DO]: NotionNode[]
	[NotionBlockType.UNSUPPORTED]: {}
}
