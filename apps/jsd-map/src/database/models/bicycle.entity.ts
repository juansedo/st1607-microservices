import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("bicycles")
export class Bicycle extends BaseEntity {
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
	
	@Column({ type: "float" })
	locationLat: number;
	
	@Column({ type: "float" })
	locationLng: number;
}