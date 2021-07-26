import { Dimensions } from "react-native";

const gameParams = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const fieldHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(fieldHeight / this.blockSize)
    }
}

export default gameParams