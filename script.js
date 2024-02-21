const data = [
    {name: "Warrior",
    maxhp: 10,
    att: 2,
    def: 2,
    ret: true},
    {name: "Archer",
    maxhp: 10,
    att: 2,
    def: 1,
    ret: true},
    {name: "Defender",
    maxhp: 15,
    att: 1,
    def: 3,
    ret: true},
    {name: "Rider",
    maxhp: 10,
    att: 2,
    def: 1,
    ret: true},
    {name: "Cloak",
    maxhp: 5,
    att: 0,
    def: 0.5,
    ret: false},
    {name: "Dagger",
    maxhp: 10,
    att: 2,
    def: 2,
    ret: true},
    {name: "Mind-Bender",
    maxhp: 10,
    att: 0,
    def: 1,
    ret: false},
    {name: "Swordsman",
    maxhp: 15,
    att: 3,
    def: 3,
    ret: true},
    {name: "Catapult",
    maxhp: 10,
    att: 4,
    def: 0,
    ret: false},
    {name: "Knight",
    maxhp: 10,
    att: 3.5,
    def: 1,
    ret: true},
    {name: "Giant",
    maxhp: 40,
    att: 5,
    def: 4,
    ret: true},
    {name: "Raft",
    maxhp: 0,
    att: 0,
    def: 2,
    ret: false},
    {name: "Rammer",
    maxhp: 0,
    att: 3,
    def: 3,
    ret: false},
    {name: "Scout",
    maxhp: 0,
    att: 2,
    def: 1,
    ret: true},
    {name: "Bomber",
    maxhp: 0,
    att: 4,
    def: 2,
    ret: false},
    {name: "Juggernaut",
    maxhp: 40,
    att: 4,
    def: 4,
    ret: false},
    {name: "Dinghy",
    maxhp: 5,
    att: 0,
    def: 0.5,
    ret: false},
    {name: "Pirate",
    maxhp: 10,
    att: 2,
    def: 2,
    ret: false},
    {name: "Amphibian",
    maxhp: 10,
    att: 2,
    def: 1,
    ret: false},
    {name: "Tridention",
    maxhp: 15,
    att: 3,
    def: 1,
    ret: false},
    {name: "Crab",
    maxhp: 40,
    att: 4,
    def: 4,
    ret: true},
    {name: "Polytaur",
    maxhp: 15,
    att: 3,
    def: 1,
    ret: true},
    {name: "Navalion",
    maxhp: 30,
    att: 4,
    def: 4,
    ret: false},
    {name: "Dragon-Egg",
    maxhp: 10,
    att: 0,
    def: 2,
    ret: false},
    {name: "Baby-Dragon",
    maxhp: 15,
    att: 3,
    def: 3,
    ret: false},
    {name: "Fire-Dragon",
    maxhp: 20,
    att: 4,
    def: 3,
    ret: false},
    {name: "Ice-Archer",
    maxhp: 10,
    att: 0.1,
    def: 1,
    ret: false},
    {name: "Battle-Sled",
    maxhp: 15,
    att: 3,
    def: 2,
    ret: false},
    {name: "Mooni",
    maxhp: 10,
    att: 0,
    def: 2,
    ret: false},
    {name: "Ice-Fortress",
    maxhp: 20,
    att: 4,
    def: 3,
    ret: false},
    {name: "Gaami",
    maxhp: 30,
    att: 4,
    def: 4,
    ret: false},
    {name: "Hexapod",
    maxhp: 5,
    att: 3,
    def: 1,
    ret: false},
    {name: "Kiton",
    maxhp: 15,
    att: 1,
    def: 3,
    ret: true},
    {name: "Phychi",
    maxhp: 5,
    att: 1,
    def: 1,
    ret: false},
    {name: "Shaman",
    maxhp: 10,
    att: 1,
    def: 1,
    ret: false},
    {name: "Raychi",
    maxhp: 15,
    att: 3,
    def: 2,
    ret: false},
    {name: "Exida",
    maxhp: 10,
    att: 3,
    def: 1,
    ret: false},
    {name: "Doomux",
    maxhp: 20,
    att: 4,
    def: 2,
    ret: true},
    {name: "Centipede",
    maxhp: 20,
    att: 4,
    def: 3,
    ret: true},
    {name: "Segment",
    maxhp: 10,
    att: 2,
    def: 2,
    ret: false}
]

let attN = document.getElementById("attName");
for (let i = 0; i < data.length; i++) {
    let node = document.createElement("option");
    attN.appendChild(node)
    node.value = data[i].name
    node.innerHTML = data[i].name
}

let defN = document.getElementById("defName");
for (let i = 0; i < data.length; i++) {
    let node = document.createElement("option");
    defN.appendChild(node)
    node.value = data[i].name
    node.innerHTML = data[i].name
}

function calcRes(attern, defern, attHp, defHp, defBon, poi, boost, attMax = 0, defMax = 0) {
    let atter, defer;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.replace('-', ' ').toLowerCase() === attern.trim().replace('-', ' ').toLowerCase()) {
            atter = data[i];
        }
        if (data[i].name.replace('-', ' ').toLowerCase() === defern.trim().replace('-', ' ').toLowerCase()) {
            defer = data[i];
        }
    }
    if (!atter || !defer) {
        console.log(`No character with name(s): ${attern}, ${defern}`);
        return null;
    }
    if (atter.maxhp === 0) atter.maxhp = document.getElementById("attMaxHp").value;
    if (defer.maxhp === 0) defer.maxhp = document.getElementById("defMaxHp").value;
    if (boost) atter.att += 0.5;
    if (poi) defer.def *= 0.7;
    const attackForce = atter.att * (attHp / atter.maxhp);
    const defenseForce = defer.def * (defHp / defer.maxhp) * defBon;
    const totalDamage = attackForce + defenseForce;
    const result = {
        attackResult: attHp - Math.round((defenseForce / totalDamage) * defer.def * 4.5),
        defenseResult: defHp - Math.round((attackForce / totalDamage) * atter.att * 4.5)
    };
    return result;
}

/*    console.log(calcRes('warrior', 'shaman', 10.0, 10.0, 1.0, false, false));*/

function showResult() {
    var attName = document.getElementById("attName").value
    var defName = document.getElementById("defName").value
    var attHp = parseFloat(document.getElementById("attHp").value)
    var defHp = parseFloat(document.getElementById("defHp").value)
    var boost = document.getElementById("boost").checked
    var defBon = 1.0
    if (document.getElementById("defBon1").checked) defBon = 1.5
    if (document.getElementById("defBon2").checked) defBon = 4.0
    var poi = document.getElementById("poi").checked
    var result = calcRes(attName, defName, attHp, defHp, defBon, boost, poi)
    
    if (result) {
        document.getElementById("atterResult").innerHTML = result.attackResult
        document.getElementById("deferResult").innerHTML = result.defenseResult
    }
}

function selChanged() {
    console.log("Hello")
    let att, def;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.name == document.getElementById("attName").value) att = element;
        if (element.name == document.getElementById("defName").value) def = element;
    }
    if (att.maxhp == 0) {
        document.getElementById("attHp").value = document.getElementById("attMaxHp").value;
        document.getElementById("attMaxHp").style.display = "initial"
    } else {
        document.getElementById("attMaxHp").style.display = "none"
        document.getElementById("attHp").value = att.maxhp;
    }
    if (def.maxhp == 0) {
        document.getElementById("defHp").value = document.getElementById("defMaxHp").value;
        document.getElementById("defMaxHp").style.display = "initial"
    } else {
        document.getElementById("defMaxHp").style.display = "none"
        document.getElementById("defHp").value = def.maxhp;
    }
}