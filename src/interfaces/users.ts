export type UserRole = 'Guru' | 'Wali Kelas' | 'BP' | 'Siswa' | 'Admin';

export type User = {
	nama: string;
	user: string;
	level: UserRole;
	status: string;
};

export type UserOption = {
	id: string;
	value: string;
};
