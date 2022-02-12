export default class Player {
    constructor({x, y, userName, isHost, clientId}) {
        this.position = {
            x,
            y
        },
        this.userName= userName,
        this.keys = {
            left: {
                pressed: false
            },
            right: {
                pressed: false
            },
            up: {
                pressed: false
            },
            down: {
                pressed: false
            },
        }
        this.radius = -200;
        this.size = 40;
        this.isHost = isHost;
        this.clientId = clientId
    }
}