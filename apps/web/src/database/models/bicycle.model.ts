type BicycleType = { id: string; color: string; model: string; location: [number, number] };

class Bicycle {
	constructor(private id: string, private color: string, private model: string, private location: [number, number]) {}

	get() {
		return { id: this.id, color: this.color, model: this.model, location: this.location };
	}

	getId() {
		return this.id;
	}

	getLocation() {
		return this.location;
	}

	update(payload: Partial<BicycleType>) {
		this.color = payload.color ?? this.color;
		this.model = payload.model ?? this.model;
		this.location = payload.location ?? this.location;
	}

	toString() {
		return `id: ${this.id} | color: ${this.color}`;
	}
}

class BicycleRepository {
	static index: number = 1;
	static memory: Bicycle[] = [];

	static getAll() {
		return this.memory.map(x => x.get());
	}

	static createOne(color: string, model: string, location: [number, number]) {
		const elem = new Bicycle(String(this.index++), color, model, location);
		BicycleRepository.memory.push(elem);
	}

	static findOne(id: string) {
		const elem = BicycleRepository.memory.find(x => x.getId() === id);
		return elem;
	}

	static updateOne(id: string, payload: Partial<BicycleType>) {
		const elem = BicycleRepository.memory.find(x => x.getId() === id);
		if (elem) elem.update(payload);
		return elem;
	}

	static deleteOne(id: string) {
		const actualLength = BicycleRepository.memory.length;
		const newMemory = BicycleRepository.memory.filter(x => x.getId() !== id);
		this.memory = newMemory;
		if (newMemory.length < actualLength) {
			return;
		} else {
			throw new Error();
		}
	}
}

export { Bicycle, BicycleType, BicycleRepository };
