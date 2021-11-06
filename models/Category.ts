export interface Category {
	id: string;
	name: string;
	slug: string;
	color: string;
	description?: string;
	locale?: string;
	created_at: Date;
	updated_at: Date;
}
