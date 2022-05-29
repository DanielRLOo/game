//PLAYER
  //WALKCYCLE
    //Body texure
    const BODY_male = new Image();//INDEX 0
    BODY_male.src = './imgs/character/png/walkcycle/BODY_male.png';
    const BODY_skeleton = new Image();// INDEX 1
    BODY_skeleton.src = './imgs/character/png/walkcycle/BODY_skeleton.png';

    const bodySkin = [BODY_male, BODY_skeleton];

    //HAIR textures
    const HEAD_hair_blonde = new Image(); //INDEX 0
    HEAD_hair_blonde.src = './imgs/character/png/walkcycle/HEAD_hair_blonde.png';

    const hairSkin = [
      HEAD_hair_blonde,
    ]

    //FEET piece textures
    const FEET_plate_armor_shoes = new Image(); //INDEX 0
    FEET_plate_armor_shoes.src = './imgs/character/png/walkcycle/FEET_plate_armor_shoes.png';
    const FEET_shoes_brown = new Image(); // INDEX 1
    FEET_shoes_brown.src = './imgs/character/png/walkcycle/FEET_shoes_brown.png';

    const feetSkin = [FEET_plate_armor_shoes, FEET_shoes_brown];

    //LEGS piece textures
    const LEGS_pants_greenish = new Image(); //INDEX 0
    LEGS_pants_greenish.src = './imgs/character/png/walkcycle/LEGS_pants_greenish.png';
    const LEGS_plate_armor_pants = new Image(); //INDEX 1
    LEGS_plate_armor_pants.src = './imgs/character/png/walkcycle/LEGS_plate_armor_pants.png';
    const LEGS_robe_skirt = new Image(); //INDEX 2
    LEGS_robe_skirt.src = './imgs/character/png/walkcycle/LEGS_robe_skirt.png';

    const legSkin = [LEGS_pants_greenish, LEGS_plate_armor_pants, LEGS_robe_skirt];

    //HANDS piece textures
    const HANDS_plate_armor_gloves = new Image(); //INDEX 0
    HANDS_plate_armor_gloves.src = './imgs/character/png/walkcycle/HANDS_plate_armor_gloves.png';

    const handSkin = [HANDS_plate_armor_gloves];

    //TORSO piece textures
    const TORSO_chain_armor_jacket_purple = new Image(); //INDEX 0
    TORSO_chain_armor_jacket_purple.src = './imgs/character/png/walkcycle/TORSO_chain_armor_jacket_purple.png';
    const TORSO_chain_armor_torso = new Image(); //INDEX 1
    TORSO_chain_armor_torso.src = './imgs/character/png/walkcycle/TORSO_chain_armor_torso.png';
    const TORSO_leather_armor_shirt_white = new Image(); //INDEX 3
    TORSO_leather_armor_shirt_white.src = './imgs/character/png/walkcycle/TORSO_leather_armor_shirt_white.png';
    const TORSO_leather_armor_torso = new Image(); //INDEX 4
    TORSO_leather_armor_torso.src = './imgs/character/png/walkcycle/TORSO_leather_armor_torso.png';
    const TORSO_plate_armor_torso = new Image(); //INDEX 5
    TORSO_plate_armor_torso.src = './imgs/character/png/walkcycle/TORSO_plate_armor_torso.png';
    const TORSO_robe_shirt_brown = new Image(); //INDEX 6
    TORSO_robe_shirt_brown.src = './imgs/character/png/walkcycle/TORSO_robe_shirt_brown.png';

    const torsoSkin = [
      TORSO_chain_armor_jacket_purple,
      TORSO_chain_armor_torso,
      TORSO_leather_armor_shirt_white,
      TORSO_leather_armor_torso,
      TORSO_plate_armor_torso,
      TORSO_robe_shirt_brown,
    ];

    //SHOULDER piece texture
    const TORSO_leather_armor_shoulders = new Image(); //INDEX 0
    TORSO_leather_armor_shoulders.src = './imgs/character/png/walkcycle/TORSO_leather_armor_shoulders.png';
    const TORSO_plate_armor_arms_shoulder = new Image(); //INDEX 1
    TORSO_plate_armor_arms_shoulder.src = './imgs/character/png/walkcycle/TORSO_plate_armor_arms_shoulders.png';

    const shoulderSkin = [
      TORSO_leather_armor_shoulders,
      TORSO_plate_armor_arms_shoulder
    ]

    //BRACER piece texturesconst
    TORSO_leather_armor_bracers = new Image(); //INDEX 0
    TORSO_leather_armor_bracers.src = './imgs/character/png/walkcycle/TORSO_leather_armor_bracers.png';

    const bracerSkin = [
      TORSO_leather_armor_bracers,
    ]

    //HEAD piece textures
    const HEAD_chain_armor_helmet = new Image(); //INDEX 0
    HEAD_chain_armor_helmet.src = './imgs/character/png/walkcycle/HEAD_chain_armor_helmet.png';
    const HEAD_chain_armor_hood = new Image(); //INDEX 1
    HEAD_chain_armor_hood.src = './imgs/character/png/walkcycle/HEAD_chain_armor_hood.png';
    const HEAD_leather_armor_hat = new Image(); //INDEX 2
    HEAD_leather_armor_hat.src = './imgs/character/png/walkcycle/HEAD_leather_armor_hat.png';
    const HEAD_plate_armor_helmet = new Image(); //INDEX 3
    HEAD_plate_armor_helmet.src = './imgs/character/png/walkcycle/HEAD_plate_armor_helmet.png';
    const HEAD_robe_hood = new Image(); //INDEX 4
    HEAD_robe_hood.src = './imgs/character/png/walkcycle/HEAD_robe_hood.png';

    const headSkin = [
      HEAD_chain_armor_helmet,
      HEAD_chain_armor_hood,
      HEAD_leather_armor_hat,
      HEAD_plate_armor_helmet,
      HEAD_robe_hood,
    ];

    //BEHIND piece textures
    const BEHIND_quiver = new Image(); //INDEX 0
    BEHIND_quiver.src = './imgs/character/png/walkcycle/BEHIND_quiver.png';

    const behindSkin = [BEHIND_quiver];

    //BELT piece textures
    const BELT_leather = new Image(); //INDEX 0
    BELT_leather.src = './imgs/character/png/walkcycle/BELT_leather.png';
    const BELT_rope = new Image(); //INDEX 1
    BELT_rope.src = './imgs/character/png/walkcycle/BELT_rope.png';

    const beltSkin = [
      BELT_leather,
      BELT_rope,
    ]
