export type Employee = {
	id: number;
	name: string;
	title: string;
	phone: string;
	managerId: number | null;
	expanded?: boolean;
	employees?: Employee[];
};

export type ColumnDescriptor = {
	field: string;
	title: string;
	width?: string;
	expandable?: boolean;
};
