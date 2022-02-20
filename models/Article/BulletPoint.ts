export enum BulletTypeEnum {
	faq = "faq",
}

export interface BulletPoint {
	name: string;
	targetId?: string;
	bulletType?: BulletTypeEnum;
}
