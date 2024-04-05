import { v4 as uuidv4 } from 'uuid';
import { Compra } from "../models/Compra";

class ComprasRepository {
    private compras: Compra[] = [];

    cadastrar(compra: Compra) {
        compra.id = uuidv4();
        this.compras.push(compra);

        return compra;
    }
}

const comprasRepository = new ComprasRepository();

export { comprasRepository };