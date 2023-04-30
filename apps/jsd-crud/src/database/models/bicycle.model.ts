import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export type BicycleDTO = { id: string; color: string; model: string; location: [number, number] };

@Entity("bicycles")
export class Bicycle {
	@PrimaryGeneratedColumn("uuid")
	id: string;
	
	@CreateDateColumn({ default: () => "CURRENT_TIMESTAMP" })
	createdAt: Date;
	
	@UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP" })
	updatedAt: Date;
	
	@Column()
	color: string;
	
	@Column()
	model: string;
	
	@Column()
	locationLat: number;
	
	@Column()
	locationLng: number;
}