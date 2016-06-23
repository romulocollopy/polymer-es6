class PolymerES6Element {

    beforeRegister() {
        this.is = 'polymer-es6';
        this.properties = this.get_properties()
    }

    get_properties () {
        return {
            name: {
              type: String,
              value: () => 'Boby'
            },
            compliment: {
                type: String,
                value: this.be_polite
            },
            liked_it: {
                value: 'Cool, hun?'
            }
        }
    }

    be_polite(){
        return "how are you?"
    }
}
Polymer(PolymerES6Element);
