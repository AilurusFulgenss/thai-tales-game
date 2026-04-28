import { useState, useEffect, useCallback } from "react";

// ============================================================
// DATA: นิทานไทย 4 ภาค
// ============================================================
// IMAGE PLACEHOLDERS:
// แทนที่ URL ในฟิลด์ 'image' ด้วยรูปภาพจริงได้ภายหลัง
// รูปแบบ: IMAGE_{REGION}_{STEP_NUMBER} เช่น IMAGE_NORTH_01
// ============================================================

const STORIES = [
  // ═══════════════════════════════════════════
  // ภาคเหนือ: ดาวลูกไก่
  // ═══════════════════════════════════════════
  {
    id: "north",
    title: "ดาวลูกไก่",
    region: "ภาคเหนือ",
    regionColor: "#8B6914",
    emoji: "🏔️",
    fullStoryUrl: "https://anyflip.com/nvoax/rsqg/basic",
    summary: "ตำนานกลุ่มดาวลูกไก่บนท้องฟ้า เรื่องราวของแม่ไก่ผู้ปกป้องลูกน้อยทั้งเจ็ดจากพญาเหยี่ยวผู้โหดร้าย",
    steps: [
      {
        id: 1,
        title: "ตอนที่ 1: ภัยจากท้องฟ้า",
        text: "ในหมู่บ้านเล็กๆ ริมเชิงดอย แม่ไก่อาศัยอยู่กับลูกน้อยทั้งเจ็ดตัวอย่างมีความสุข ลูกๆ วิ่งเล่นไล่จับแมลงในทุ่งหญ้าทุกเช้า จนวันหนึ่ง เงาดำขนาดใหญ่ทาบลงมาจากท้องฟ้า พญาเหยี่ยวตัวมหึมาโฉบลงมาประกาศก้องว่า \"ข้าจะมาจับลูกไก่ไปทีละตัว ไม่มีใครหนีพ้น!\"",
        image: "/images/IMAGE_NORTH_01.png",
        choices: [
          { text: "แม่ไก่รีบพาลูกทั้งเจ็ดหลบหนีเข้าป่าลึก", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "แม่ไก่กางปีกยืนขวาง เผชิญหน้ากับพญาเหยี่ยว", path: "pathA" },
          { text: "แม่ไก่วิ่งไปขอความช่วยเหลือจากสัตว์อื่นในป่า", path: "pathB" },
        ],
      },
      {
        id: 2,
        title: "ตอนที่ 2: การไล่ล่า",
        text: "ไม่ว่าจะพยายามแค่ไหน พญาเหยี่ยวก็ตามมาจนได้ มันบินวนเหนือยอดไม้ ตาคมกริบจ้องมองหาเหยื่อ แล้วก็โฉบลงมาอย่างรวดเร็ว คว้าลูกไก่ตัวแรกไปต่อหน้าต่อตา ลูกไก่ที่เหลือกรีดร้องด้วยความกลัว กอดแม่แน่น",
        image: "/images/IMAGE_NORTH_02.png",
        choices: [
          { text: "แม่ไก่พาลูกที่เหลือซ่อนในโพรงไม้ใหญ่", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "แม่ไก่กระโจนขึ้นจิกตีพญาเหยี่ยวสุดแรง", path: "pathA" },
          { text: "แม่ไก่ล่อพญาเหยี่ยวไปทางอื่นเพื่อให้ลูกหนี", path: "pathB" },
        ],
      },
      {
        id: 3,
        title: "ตอนที่ 3: น้ำตาแม่",
        text: "วันแล้ววันเล่า พญาเหยี่ยวไม่เคยหยุด มันจับลูกไก่ไปทีละตัว จากเจ็ดเหลือห้า จากห้าเหลือสาม แม่ไก่ร้องไห้จนน้ำตาเป็นสาย หัวใจแตกสลาย มองขึ้นไปบนท้องฟ้ายามค่ำคืนที่เต็มไปด้วยดวงดาว",
        image: "/images/IMAGE_NORTH_03.png",
        choices: [
          { text: "แม่ไก่คุกเข่าสวดอ้อนวอนเทวดาบนสวรรค์", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "แม่ไก่ตัดสินใจสู้ครั้งสุดท้าย ยอมตายแทนลูก", path: "pathA" },
          { text: "แม่ไก่เข้าไปเจรจากับพญาเหยี่ยวถึงรัง", path: "pathB" },
        ],
      },
      {
        id: 4,
        title: "ตอนที่ 4: เสียงจากสวรรค์",
        text: "ท้องฟ้าสว่างวาบขึ้นกะทันหัน แสงทองอ่อนโปรยลงมาจากเบื้องบน เทวดาผู้เมตตาได้ยินเสียงร้องไห้ของแม่ไก่ เห็นความรักอันยิ่งใหญ่ที่แม่มีต่อลูก จึงเอ่ยขึ้นว่า \"เราเห็นความทุกข์ของเจ้า เจ้าต้องการสิ่งใด\"",
        image: "/images/IMAGE_NORTH_04.png",
        choices: [
          { text: "ขอให้พาลูกๆ ไปอยู่ที่ที่ปลอดภัยที่สุด ไกลจากภัย", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "ขอพลังวิเศษเพื่อปราบพญาเหยี่ยวให้สิ้นซาก", path: "pathA" },
          { text: "ขอให้เปลี่ยนใจพญาเหยี่ยว ให้มีเมตตา", path: "pathB" },
        ],
      },
      {
        id: 5,
        title: "ตอนที่ 5: ทางเลือกสุดท้าย",
        text: "เทวดาพยักหน้าอย่างเข้าใจ แล้วเอ่ยว่า \"เราจะให้ในสิ่งที่เจ้าขอ แต่ทุกทางเลือกมีสิ่งที่ต้องแลก จงเลือกให้ดี\" แสงทองสว่างขึ้นอีกครั้ง รอคำตอบจากแม่ไก่",
        image: "/images/IMAGE_NORTH_05.png",
        choices: [
          { text: "ยอมรับให้เทวดาพาทุกตัวขึ้นไปเป็นดาวบนท้องฟ้า", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "ขอพลังสู้ แม้ต้องเสี่ยงทุกอย่าง ขอปกป้องลูก", path: "pathA" },
          { text: "ขอให้ทุกชีวิตในป่าอยู่ร่วมกันอย่างสงบสุข", path: "pathB" },
        ],
      },
    ],
    endings: {
      original: {
        title: "✦ ตอนจบออริจินัล: กลุ่มดาวลูกไก่",
        text: "เทวดาโอบกอดแม่ไก่และลูกๆ ด้วยแสงสว่าง ร่างของพวกเขาค่อยๆ ลอยขึ้นสู่ท้องฟ้า กลายเป็นดวงดาวเจ็ดดวงเรียงกันเป็นกลุ่ม ส่องแสงระยิบระยับทุกค่ำคืน ผู้คนเรียกกลุ่มดาวนี้ว่า \"ดาวลูกไก่\" เป็นสัญลักษณ์ของความรักที่ไม่มีวันดับ แม้จากโลกไปแล้ว แม่ไก่ก็ยังคงอยู่เคียงข้างลูกตลอดกาล",
        moral: "บางครั้งการจากไปก็คือทางรอด ความรักของแม่ไม่มีวันดับแม้เปลี่ยนรูปร่าง เมื่อมองดาวลูกไก่บนฟ้า ให้นึกถึงความรักที่ยิ่งใหญ่ที่สุดในโลก",
        image: "/images/IMAGE_NORTH_END_ORIGINAL.png",
      },
      pathA: {
        title: "✦ ตอนจบทางเลือก: ปีกแห่งความกล้า",
        text: "พลังจากเทวดาทำให้แม่ไก่กลายร่างเป็นนกอินทรีย์ทองคำ กางปีกกว้างใหญ่บินขึ้นสู้กับพญาเหยี่ยว ด้วยความรักที่มีต่อลูก แม่ไก่สู้อย่างไม่กลัวตาย จนพญาเหยี่ยวพ่ายแพ้หนีไปไม่กลับมาอีก ลูกไก่ทุกตัวปลอดภัย แม่ไก่กลับคืนร่างเดิม กอดลูกๆ ไว้แน่น",
        moral: "ความกล้าหาญที่เกิดจากความรักสามารถเอาชนะทุกอุปสรรค บางครั้งเราต้องลุกขึ้นสู้เพื่อคนที่เรารัก แม้จะกลัวแค่ไหนก็ตาม",
        image: "/images/IMAGE_NORTH_END_A.png",
      },
      pathB: {
        title: "✦ ตอนจบทางเลือก: ป่าแห่งสันติ",
        text: "เทวดาส่งแสงสว่างลงมาปกคลุมทั้งป่า พญาเหยี่ยวรู้สึกอบอุ่นในหัวใจเป็นครั้งแรก มันนึกถึงตอนที่ตัวเองยังเป็นลูกนก เคยมีแม่คอยดูแลเหมือนกัน น้ำตาไหลออกมา พญาเหยี่ยวบินลงมาขอโทษแม่ไก่ และนำลูกไก่ที่เหลือกลับมาคืน ตั้งแต่นั้นสัตว์ทุกชนิดในป่าอยู่ร่วมกันอย่างสงบ",
        moral: "การให้อภัยและความเมตตามีพลังเปลี่ยนแปลงแม้หัวใจที่โหดร้ายที่สุด สันติสุขที่แท้จริงเกิดจากการเข้าใจกัน ไม่ใช่จากการเอาชนะ",
        image: "/images/IMAGE_NORTH_END_B.png",
      },
    },
  },

  // ═══════════════════════════════════════════
  // ภาคอีสาน: กล่องข้าวน้อยฆ่าแม่
  // ═══════════════════════════════════════════
  {
    id: "isan",
    title: "กล่องข้าวน้อยฆ่าแม่",
    region: "ภาคอีสาน",
    regionColor: "#B8860B",
    emoji: "🌾",
    fullStoryUrl: "https://anyflip.com/ecvka/ebbo/",
    summary: "นิทานสอนใจเรื่องความกตัญญู ชายหนุ่มผู้ทำร้ายแม่เพราะความโกรธ ก่อนจะค้นพบความจริงที่สายเกินไป",
    steps: [
      {
        id: 1,
        title: "ตอนที่ 1: กลางทุ่งนา",
        text: "ชายหนุ่มชาวนาทำงานกลางทุ่งตั้งแต่เช้ามืด แดดเที่ยงแผดเผาจนเหงื่อท่วมตัว ท้องร้องจ๊อกๆ รอแม่เฒ่าเอาข้าวมาส่ง จนเห็นแม่เดินกะเผลกมาแต่ไกล มือถือกล่องข้าวเล็กจิ๋วเท่าฝ่ามือ ลูกชายเห็นแล้วเริ่มรู้สึกไม่พอใจ",
        image: "/images/IMAGE_ISAN_01.png",
        choices: [
          { text: "โมโหจัด ตะโกนต่อว่าแม่ว่าข้าวแค่นี้จะพอกินเหรอ", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "พยายามข่มใจ อดทนรอเปิดกล่องดูก่อน", path: "pathA" },
          { text: "วิ่งไปรับแม่ ช่วยพยุงเดิน ขอบคุณที่เดินมาไกล", path: "pathB" },
        ],
      },
      {
        id: 2,
        title: "ตอนที่ 2: กล่องข้าวน้อย",
        text: "แม่เฒ่ายื่นกล่องข้าวน้อยให้ด้วยรอยยิ้ม ลูกชายจ้องมองกล่องเล็กกระจิดริด คิดในใจว่ากินคำเดียวก็คงหมด ทำนาเหนื่อยแทบตาย แม่ทำอาหารมาให้แค่นี้เอง แม่เอ่ยเสียงอ่อนว่า \"ลองเปิดดูก่อนนะลูก\"",
        image: "/images/IMAGE_ISAN_02.png",
        choices: [
          { text: "ปัดมือแม่ออก ไม่สนใจ ด่าว่าแม่ตระหนี่", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "หยุดคิดสักครู่ ค่อยๆ เปิดฝากล่องดู", path: "pathA" },
          { text: "รับกล่องมาเบาๆ ถามแม่ว่ากินข้าวหรือยัง", path: "pathB" },
        ],
      },
      {
        id: 3,
        title: "ตอนที่ 3: ชั่วขณะแห่งความโกรธ",
        text: "ความหิวและความโกรธเข้าครอบงำจิตใจ ลูกชายหยิบเคียวเกี่ยวข้าวขึ้นมา มือสั่น สายตามืดมน แม่เฒ่าถอยหลังด้วยความตกใจ ร้องเรียกชื่อลูกด้วยเสียงสั่นเครือ \"ลูก... ฟังแม่ก่อน... กล่องข้าวนี้มันไม่ธรรมดา...\"",
        image: "/images/IMAGE_ISAN_03.png",
        choices: [
          { text: "ไม่ฟังเสียงแม่ ลงมือทำร้ายแม่ด้วยความโกรธ", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "ยั้งมือไว้ได้ทัน วางเคียวลง หยิบกล่องข้าวขึ้นมาเปิด", path: "pathA" },
          { text: "ร้องไห้ออกมา ทิ้งเคียว คุกเข่าลงกอดแม่ขอโทษ", path: "pathB" },
        ],
      },
      {
        id: 4,
        title: "ตอนที่ 4: ความจริงในกล่อง",
        text: "กล่องข้าวเปิดออก... ข้าวในกล่องน้อยนิดก็จริง แต่เมื่อตักกินคำแรก ข้าวก็เพิ่มขึ้นมาเอง ตักเท่าไรก็ไม่มีวันหมด! นี่คือข้าววิเศษที่แม่ตั้งใจหุงด้วยความรักทั้งหมดที่มี ความจริงปรากฏต่อหน้า ทุกอย่างชัดเจน",
        image: "/images/IMAGE_ISAN_04.png",
        choices: [
          { text: "สำนึกผิด แต่ทุกอย่างสายเกินไปแล้ว ร้องไห้กอดร่างแม่", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "หันไปกอดแม่ที่ยังอยู่ ร้องไห้ขอโทษ สัญญาจะไม่โกรธอีก", path: "pathA" },
          { text: "ตักข้าวให้แม่กินด้วย นั่งกินข้าวด้วยกันอย่างมีความสุข", path: "pathB" },
        ],
      },
      {
        id: 5,
        title: "ตอนที่ 5: บทเรียนชีวิต",
        text: "ลมหอบเอาเมฆดำมาปกคลุมทุ่งนา ราวกับท้องฟ้าร้องไห้แทน ชายหนุ่มนั่งนิ่งอยู่กลางทุ่ง มองกล่องข้าววิเศษ และนึกถึงทุกสิ่งที่เกิดขึ้น",
        image: "/images/IMAGE_ISAN_05.png",
        choices: [
          { text: "แบกความผิดติดตัวไปตลอดชีวิต เป็นบทเรียนชั่วกาล", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "สัญญากับตัวเองว่าจะดูแลแม่ให้ดีที่สุดตลอดไป", path: "pathA" },
          { text: "นำเรื่องราวนี้ไปเล่าเตือนใจคนอื่น ให้รักแม่ก่อนสาย", path: "pathB" },
        ],
      },
    ],
    endings: {
      original: {
        title: "✦ ตอนจบออริจินัล: ข้าวน้อย ความผิดใหญ่",
        text: "ชายหนุ่มเพิ่งรู้ความจริงเมื่อสายเกินไป ข้าวในกล่องน้อยนั้นกินไม่มีวันหมด เป็นข้าววิเศษที่แม่ตั้งใจหุงให้ด้วยหัวใจทั้งดวง แต่เขาทำร้ายแม่ไปแล้วด้วยความโกรธที่ไร้เหตุผล ชายหนุ่มร้องไห้คลุกฝุ่น กอดกล่องข้าวไว้แน่น ตั้งแต่นั้นเขาไม่เคยยิ้มอีกเลย เดินบอกเล่าเรื่องราวของตัวเองให้คนทั้งหมู่บ้านฟัง เพื่อไม่ให้ใครทำผิดซ้ำ",
        moral: "อย่าตัดสินสิ่งใดจากภายนอก ความรักของแม่อาจซ่อนอยู่ในสิ่งเล็กๆ ที่เรามองข้าม จงรักและกตัญญูต่อแม่ก่อนที่จะสายเกินไป",
        image: "/images/IMAGE_ISAN_END_ORIGINAL.png",
      },
      pathA: {
        title: "✦ ตอนจบทางเลือก: ทันยั้งมือ",
        text: "ชายหนุ่มยั้งมือไว้ได้ทัน วางเคียวลงแล้วเปิดกล่องข้าว เมื่อเห็นข้าววิเศษที่กินไม่หมด น้ำตาไหลพราก เขากอดแม่เฒ่าไว้แน่น ร้องไห้ขอโทษ ตั้งแต่วันนั้นเขาไม่เคยโกรธแม่อีกเลย ทำงานหนักเพื่อดูแลแม่จนวันสุดท้ายของชีวิต",
        moral: "สติหยุดยั้งชั่ววินาทีเดียวอาจเปลี่ยนชีวิตทั้งชีวิต จงคิดก่อนทำเสมอ เพราะบางสิ่งที่ทำลงไปแล้วเอาคืนไม่ได้",
        image: "/images/IMAGE_ISAN_END_A.png",
      },
      pathB: {
        title: "✦ ตอนจบทางเลือก: ข้าวมื้อเดียวกัน",
        text: "ชายหนุ่มรับกล่องข้าวจากแม่ด้วยความขอบคุณ พอเปิดกล่องเห็นข้าวน้อยนิดก็ไม่ว่าอะไร ตักให้แม่กินก่อน แล้วค่อยกินเอง ปาฏิหาริย์เกิดขึ้น ข้าวในกล่องไม่มีวันหมด สองแม่ลูกกินอิ่มหนำ นั่งพักใต้ร่มไม้กลางทุ่ง หัวเราะร่วมกัน กล่องข้าวน้อยกลายเป็นสมบัติล้ำค่าของครอบครัว",
        moral: "ความกตัญญูและใจเย็นนำมาซึ่งสิ่งมหัศจรรย์ เมื่อเราให้ด้วยใจ สิ่งดีๆ จะกลับมาหาเราเสมอ",
        image: "/images/IMAGE_ISAN_END_B.png",
      },
    },
  },

  // ═══════════════════════════════════════════
  // ภาคกลาง: พิกุลทอง
  // ═══════════════════════════════════════════
  {
    id: "central",
    title: "พิกุลทอง (ซินเดอเรลล่าไทย)",
    region: "ภาคกลาง",
    regionColor: "#C41E3A",
    emoji: "🏛️",
    fullStoryUrl: "http://digital.nlt.go.th/dlib/items/show/11952?collection=54#?c=&m=&s=&cv=&xywh=252%2C-327%2C571%2C653",
    summary: "เรื่องราวของหญิงสาวผู้ถูกแม่เลี้ยงกลั่นแกล้ง แต่ด้วยน้ำใจงามจึงได้รับพรจากสิ่งศักดิ์สิทธิ์",
    steps: [
      {
        id: 1,
        title: "ตอนที่ 1: เด็กกำพร้าในคฤหาสน์",
        text: "พิกุลทองเป็นลูกสาวเศรษฐี ตั้งแต่แม่แท้ๆ เสียชีวิต พ่อก็แต่งงานใหม่ แม่เลี้ยงกับพี่สาวต่างมารดาใจร้าย บังคับให้พิกุลทองทำงานหนักตั้งแต่เช้าจรดค่ำ กินข้าวก้นหม้อ นอนเสื่อผืนเก่า แต่พิกุลทองไม่เคยบ่น",
        image: "/images/IMAGE_CENTRAL_01.png",
        choices: [
          { text: "ทำงานทุกอย่างตามที่ถูกสั่งอย่างอดทน ไม่เคยบ่นสักคำ", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "เล่าความทุกข์ให้พ่อฟัง ขอความยุติธรรม", path: "pathA" },
          { text: "หนีออกจากบ้านไปใช้ชีวิตด้วยตัวเอง", path: "pathB" },
        ],
      },
      {
        id: 2,
        title: "ตอนที่ 2: ปลาวิเศษ",
        text: "วันหนึ่งพิกุลทองไปซักผ้าริมคลอง เห็นปลาน้อยตัวหนึ่งติดอยู่ในซอกหิน ดิ้นรนจะตาย พิกุลทองสงสารจึงช่วยเอาปลาลงน้ำ ปลาพูดได้! มันบอกว่า \"ขอบคุณนะ เจ้าใจดี ต่อไปเมื่อเจ้าต้องการอะไร มาเรียกข้าที่ริมน้ำ\"",
        image: "/images/IMAGE_CENTRAL_02.png",
        choices: [
          { text: "จดจำคำพูดของปลาไว้ แล้วกลับไปทำงานตามปกติ", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "ขอให้ปลาช่วยทำให้แม่เลี้ยงใจดีขึ้น", path: "pathA" },
          { text: "ขอให้ปลาพาหนีไปจากบ้านนี้ทันที", path: "pathB" },
        ],
      },
      {
        id: 3,
        title: "ตอนที่ 3: งานเลี้ยงในวัง",
        text: "ข่าวแพร่สะพัดว่าเจ้าชายจะจัดงานเลี้ยงใหญ่ เชิญหญิงสาวทั้งเมืองมาร่วม แม่เลี้ยงแต่งตัวให้ลูกแท้ๆ อย่างสวยงาม แต่สั่งพิกุลทองให้อยู่บ้านเฝ้าเรือน ห้ามออกไปไหน พิกุลทองนั่งร้องไห้คนเดียว",
        image: "/images/IMAGE_CENTRAL_03.png",
        choices: [
          { text: "ไปริมน้ำเรียกปลาวิเศษ ขอความช่วยเหลือ", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "แอบหนีไปงานเลี้ยงด้วยตัวเอง ในชุดที่มีอยู่", path: "pathA" },
          { text: "ยอมอยู่บ้าน แต่ส่งของขวัญไปให้เจ้าชายแทน", path: "pathB" },
        ],
      },
      {
        id: 4,
        title: "ตอนที่ 4: ในงานเลี้ยง",
        text: "พิกุลทองปรากฏตัวในงานเลี้ยงด้วยชุดผ้าไหมทองอร่าม สวยงามจนทุกคนตะลึง ดอกพิกุลทองร่วงหล่นจากผมทุกก้าวที่เดิน เจ้าชายเห็นก็หลงรัก ทั้งสองพูดคุยกันอย่างออกรส แต่ใกล้เที่ยงคืน พิกุลทองต้องรีบกลับ",
        image: "/images/IMAGE_CENTRAL_04.png",
        choices: [
          { text: "รีบวิ่งกลับบ้านก่อนเที่ยงคืน ทำรองเท้าหล่นไว้", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "เล่าความจริงทั้งหมดให้เจ้าชายฟังในคืนนั้น", path: "pathA" },
          { text: "ชวนเจ้าชายหนีไปด้วยกัน ไม่อยากกลับบ้าน", path: "pathB" },
        ],
      },
      {
        id: 5,
        title: "ตอนที่ 5: ตามหาเจ้าของรองเท้า",
        text: "เจ้าชายถือรองเท้าทองออกตามหาเจ้าของไปทั่วเมือง มาถึงบ้านเศรษฐี แม่เลี้ยงผลักลูกแท้ๆ ออกมาลองรองเท้า แต่ไม่พอดีสักคน จนเจ้าชายเหลือบไปเห็นพิกุลทองที่กำลังกวาดบ้านอยู่หลังเรือน",
        image: "/images/IMAGE_CENTRAL_05.png",
        choices: [
          { text: "พิกุลทองก้าวออกมาลองรองเท้า พอดีเป๊ะ ความจริงเปิดเผย", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "พิกุลทองปฏิเสธ ขอให้เจ้าชายรักเธอในชุดธรรมดา", path: "pathA" },
          { text: "พิกุลทองขอให้เจ้าชายช่วยให้ครอบครัวกลับมารักกัน", path: "pathB" },
        ],
      },
    ],
    endings: {
      original: {
        title: "✦ ตอนจบออริจินัล: เจ้าหญิงพิกุลทอง",
        text: "รองเท้าทองพอดีเท้าพิกุลทองเป๊ะ เจ้าชายจำได้ทันที ความจริงทั้งหมดถูกเปิดเผย แม่เลี้ยงและพี่สาวได้รับบทลงโทษ พิกุลทองแต่งงานกับเจ้าชาย ใช้ชีวิตอย่างมีความสุข แต่เธอไม่เคยลืมวันเก่าๆ จึงช่วยเหลือเด็กกำพร้าทุกคนในเมือง",
        moral: "ความอดทนและน้ำใจงามจะนำมาซึ่งผลตอบแทนเสมอ แม้จะถูกกดขี่แค่ไหน จงอย่าสูญเสียความดีในตัวเอง",
        image: "/images/IMAGE_CENTRAL_END_ORIGINAL.png",
      },
      pathA: {
        title: "✦ ตอนจบทางเลือก: ยืนด้วยขาตัวเอง",
        text: "พิกุลทองปฏิเสธรองเท้าทอง เธอบอกเจ้าชายว่า \"ถ้าท่านรักข้า จงรักข้าในชุดนี้ ไม่ใช่ในชุดทอง\" เจ้าชายซาบซึ้ง เห็นคุณค่าที่แท้จริง ทั้งสองแต่งงานกัน พิกุลทองกลายเป็นเจ้าหญิงที่ทุกคนรัก เพราะความจริงใจไม่ใช่เครื่องประดับ",
        moral: "คุณค่าที่แท้จริงของคนอยู่ที่ตัวตนภายใน ไม่ใช่รูปลักษณ์ภายนอก จงกล้าเป็นตัวเองในทุกสถานการณ์",
        image: "/images/IMAGE_CENTRAL_END_A.png",
      },
      pathB: {
        title: "✦ ตอนจบทางเลือก: ครอบครัวที่สมบูรณ์",
        text: "พิกุลทองขอให้เจ้าชายช่วยให้ครอบครัวกลับมารักกัน เจ้าชายเรียกทุกคนมาพูดคุย แม่เลี้ยงร้องไห้สำนึกผิดเมื่อเห็นน้ำใจของพิกุลทอง ครอบครัวกลับมาอบอุ่นอีกครั้ง พิกุลทองแต่งงานกับเจ้าชาย โดยมีทุกคนมาร่วมยินดี",
        moral: "การให้อภัยคือพลังที่ยิ่งใหญ่ที่สุด การเลือกรักแม้คนที่เคยทำร้ายเรา อาจเปลี่ยนแปลงทุกอย่างได้",
        image: "/images/IMAGE_CENTRAL_END_B.png",
      },
    },
  },

  // ═══════════════════════════════════════════
  // ภาคใต้: เกาะหนูเกาะแมว
  // ═══════════════════════════════════════════
  {
    id: "south",
    title: "เกาะหนูเกาะแมว",
    region: "ภาคใต้",
    regionColor: "#1B5E20",
    emoji: "🌊",
    fullStoryUrl: "https://anyflip.com/ctjll/mell/basic",
    summary: "ตำนานเกาะสองเกาะในจังหวัดสงขลา เรื่องราวความซื่อสัตย์ของหนูและแมวที่ตามเจ้านายจนวาระสุดท้าย",
    steps: [
      {
        id: 1,
        title: "ตอนที่ 1: พ่อค้าผู้มั่งคั่ง",
        text: "ณ เมืองสงขลา พ่อค้าเรือสำเภาผู้ร่ำรวย มีสัตว์เลี้ยงสองตัวคือแมวและหนูที่รักกันดี ซื่อสัตย์ต่อเจ้านายยิ่งนัก วันหนึ่งพ่อค้าต้องล่องเรือไปค้าขายทางไกล แมวและหนูเฝ้ามองเรือออกจากฝั่ง",
        image: "/images/IMAGE_SOUTH_01.png",
        choices: [
          { text: "แมวและหนูว่ายน้ำตามเรือเจ้านายไป ไม่ยอมทิ้ง", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "แอบขึ้นเรือไปกับเจ้านายตั้งแต่แรก", path: "pathA" },
          { text: "รอเจ้านายอยู่ที่ฝั่ง เฝ้าดูแลบ้านให้", path: "pathB" },
        ],
      },
      {
        id: 2,
        title: "ตอนที่ 2: พายุกลางทะเล",
        text: "ทะเลที่เคยสงบเริ่มปั่นป่วน เมฆดำทมึนครึ้มเต็มท้องฟ้า คลื่นยักษ์ซัดเรือสำเภาจนโอนเอน พ่อค้ากอดเสากระโดงเรือไว้แน่น เรือกำลังจะแตก ทุกชีวิตตกอยู่ในอันตราย",
        image: "/images/IMAGE_SOUTH_02.png",
        choices: [
          { text: "แมวและหนูว่ายฝ่าคลื่นยักษ์ตามเจ้านายต่อไป", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "ช่วยกันอุดรูรั่วบนเรือ ไม่ยอมให้เรือจม", path: "pathA" },
          { text: "ว่ายนำทางไปหาเกาะที่ใกล้ที่สุดเพื่อพาทุกคนเข้าฝั่ง", path: "pathB" },
        ],
      },
      {
        id: 3,
        title: "ตอนที่ 3: เรือแตก",
        text: "คลื่นลูกมหึมาซัดเรือจนแตกเป็นเสี่ยงๆ สินค้าลอยกระจาย ผู้คนร้องขอความช่วยเหลือ พ่อค้าเกาะแผ่นไม้ลอยอยู่กลางทะเล แมวและหนูเห็นเจ้านายกำลังจมน้ำ",
        image: "/images/IMAGE_SOUTH_03.png",
        choices: [
          { text: "ว่ายสุดแรงไปหาเจ้านาย แม้คลื่นจะแรงแค่ไหน", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "หาแผ่นไม้มาช่วยพยุงเจ้านาย", path: "pathA" },
          { text: "ร้องเรียกชาวประมงใกล้เคียงมาช่วย", path: "pathB" },
        ],
      },
      {
        id: 4,
        title: "ตอนที่ 4: กลางมหาสมุทร",
        text: "แมวและหนูว่ายอยู่กลางทะเลมาหลายชั่วโมง ตัวเล็กจ้อยท่ามกลางคลื่นมหาสมุทร แรงเริ่มหมด ขาเริ่มชา แต่ยังมองเห็นเจ้านายอยู่ข้างหน้า หัวใจเต็มไปด้วยความซื่อสัตย์ ไม่ยอมทิ้งเจ้านาย",
        image: "/images/IMAGE_SOUTH_04.png",
        choices: [
          { text: "ว่ายต่อไปจนสุดแรง แม้ร่างกายจะไม่ไหวแล้ว", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "ใช้แรงสุดท้ายดันเจ้านายเข้าฝั่ง ช่วยชีวิตไว้", path: "pathA" },
          { text: "แมวกับหนูช่วยกันพาเจ้านายเกาะบนแผ่นไม้", path: "pathB" },
        ],
      },
      {
        id: 5,
        title: "ตอนที่ 5: วาระสุดท้าย",
        text: "ฝั่งอยู่ใกล้แค่เอื้อม แต่แมวและหนูหมดแรงแล้ว คลื่นซัดร่างเล็กๆ ไปมา เจ้านายตะโกนเรียก แต่ทำอะไรไม่ได้ ทะเลเงียบสงบลง เหลือเพียงแสงเดือนส่องลงมาบนผิวน้ำ",
        image: "/images/IMAGE_SOUTH_05.png",
        choices: [
          { text: "แมวและหนูจมลงใต้ท้องทะเล กลายเป็นเกาะสองเกาะ", path: "original", label: "★ เส้นทางออริจินัล" },
          { text: "ใช้แรงสุดท้ายว่ายเข้าฝั่ง ทั้งสามรอดชีวิต", path: "pathA" },
          { text: "เทพเจ้าทะเลเมตตา อุ้มทั้งสามขึ้นจากน้ำ", path: "pathB" },
        ],
      },
    ],
    endings: {
      original: {
        title: "✦ ตอนจบออริจินัล: เกาะหนูเกาะแมว",
        text: "แมวและหนูจมลงสู่ท้องทะเลสงขลา ด้วยความซื่อสัตย์และรักเจ้านายจนลมหายใจสุดท้าย ร่างของทั้งสองค่อยๆ กลายเป็นเกาะสองเกาะตั้งตระหง่านกลางทะเล ชาวบ้านเรียกว่า \"เกาะหนู\" และ \"เกาะแมว\" เป็นสัญลักษณ์ของความซื่อสัตย์ที่คงอยู่ชั่วนิรันดร์ พ่อค้ารอดชีวิต แต่ไม่เคยลืมสัตว์เลี้ยงทั้งสอง",
        moral: "ความซื่อสัตย์และความจงรักภักดีคือสิ่งที่ไม่มีวันสูญสลาย แม้ร่างกายจะจากไป แต่ตำนานจะอยู่ตลอดกาล",
        image: "/images/IMAGE_SOUTH_END_ORIGINAL.png",
      },
      pathA: {
        title: "✦ ตอนจบทางเลือก: กลับฝั่งด้วยกัน",
        text: "แมวและหนูใช้แรงสุดท้ายดันเจ้านายเข้าฝั่ง แล้วตัวเองก็ลอยตามคลื่นมาเกยหาด พ่อค้าอุ้มสัตว์เลี้ยงทั้งสองขึ้นมา ปลุกจนฟื้น ทั้งสามกลับบ้านด้วยกัน พ่อค้าไม่ค้าขายทางเรืออีก อยู่กับแมวและหนูอย่างมีความสุข สร้างบ้านริมทะเลสงขลา",
        moral: "บางครั้งสิ่งที่มีค่าที่สุดไม่ใช่ทรัพย์สมบัติ แต่คือชีวิตและความผูกพันที่เรามี จงรู้คุณค่าของสิ่งที่อยู่ตรงหน้า",
        image: "/images/IMAGE_SOUTH_END_A.png",
      },
      pathB: {
        title: "✦ ตอนจบทางเลือก: พรจากท้องทะเล",
        text: "เทพเจ้าแห่งท้องทะเลเห็นความซื่อสัตย์ของแมวและหนู จึงเมตตาอุ้มทั้งสามขึ้นจากน้ำ พาไปส่งที่เกาะสวรรค์กลางทะเลสงขลา พ่อค้า แมว และหนู อาศัยอยู่บนเกาะนั้นอย่างมีความสุข เกาะนั้นอุดมสมบูรณ์ มีปลาชุกชุม ผู้คนเรียกว่าเกาะแห่งความซื่อสัตย์",
        moral: "ความดีไม่เคยสูญเปล่า จักรวาลจะตอบแทนผู้ที่มีใจซื่อตรง จงมีศรัทธาในความดีที่ทำ",
        image: "/images/IMAGE_SOUTH_END_B.png",
      },
    },
  },
];

// ============================================================
// STYLES
// ============================================================
const fonts = `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&family=Noto+Serif+Thai:wght@400;500;600;700&display=swap');`;

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function ThaiTaleGame() {
  const [screen, setScreen] = useState("home");
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [pathHistory, setPathHistory] = useState([]);
  const [fadeIn, setFadeIn] = useState(true);
  const [ending, setEnding] = useState(null);

  const transition = useCallback((callback) => {
    setFadeIn(false);
    setTimeout(() => {
      callback();
      setFadeIn(true);
    }, 400);
  }, []);

  const selectStory = (story) => {
    transition(() => {
      setSelectedStory(story);
      setCurrentStep(0);
      setPathHistory([]);
      setEnding(null);
      setScreen("story");
    });
  };

  const makeChoice = (choice) => {
    const newHistory = [...pathHistory, choice.path];
    setPathHistory(newHistory);

    if (currentStep >= selectedStory.steps.length - 1) {
      // Determine ending
      const counts = { original: 0, pathA: 0, pathB: 0 };
      newHistory.forEach((p) => counts[p]++);
      let endingKey;
      if (counts.original >= 3) endingKey = "original";
      else if (counts.pathA >= counts.pathB) endingKey = "pathA";
      else endingKey = "pathB";

      transition(() => {
        setEnding(selectedStory.endings[endingKey]);
        setScreen("ending");
      });
    } else {
      transition(() => setCurrentStep((s) => s + 1));
    }
  };

  const goHome = () => {
    transition(() => {
      setScreen("home");
      setSelectedStory(null);
      setCurrentStep(0);
      setPathHistory([]);
      setEnding(null);
    });
  };

  const goSelect = () => {
    transition(() => {
      setScreen("select");
    });
  };

  const restartStory = () => {
    transition(() => {
      setCurrentStep(0);
      setPathHistory([]);
      setEnding(null);
      setScreen("story");
    });
  };

  return (
    <div style={styles.container}>
      <style>{fonts}</style>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        
        .choice-btn:hover { transform: translateY(-3px) !important; box-shadow: 0 8px 25px rgba(0,0,0,0.12) !important; }
        .choice-btn:active { transform: translateY(0) !important; }
        .story-card:hover { transform: translateY(-6px) !important; box-shadow: 0 16px 40px rgba(0,0,0,0.12) !important; }
        .nav-btn:hover { opacity: 0.85 !important; }

        /* 📱 โครงสร้างหลัก (เริ่มจากมือถือ) */
        .app-content {
          width: 100%;
          max-width: 520px;
          min-height: 100vh;
          padding: 0 20px;
          margin: 0 auto;
          transition: max-width 0.4s ease;
        }
        .card-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .story-layout {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .story-image-wrapper { width: 100%; }
        .story-content-wrapper { width: 100%; }

        /* 💻 โครงสร้างสำหรับหน้าจอคอมพิวเตอร์ (กว้าง 768px ขึ้นไป) */
        @media (min-width: 768px) {
          .app-content {
            max-width: 900px; /* ขยายขอบเขตตรงกลางให้กว้างขึ้น */
          }
          .story-page-container {
            padding-top: 200px !important;
          }
          .card-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* แบ่งการ์ดเป็น 2 คอลัมน์ */
            gap: 20px;
          }
          .story-layout {
            flex-direction: row; /* เรียงซ้าย-ขวา */
            gap: 48px; /* ระยะห่างระหว่างรูปกับข้อความ */
            align-items: flex-start;
          }
          .story-image-wrapper {
            flex: 1;
            position: sticky;
            top: 32px; /* ล็อกรูปภาพให้อยู่กับที่เวลาสกอร์ลเมาส์อ่านข้อความ */
          }
          .story-content-wrapper {
            flex: 1.2; /* ให้ฝั่งข้อความกว้างกว่าฝั่งรูปนิดหน่อย */
            padding-top: 12px;
          }
        }
      `}</style>

      <div
        className="app-content"
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {screen === "home" && <HomeScreen onStart={goSelect} />}
        {screen === "select" && (
          <SelectScreen onSelect={selectStory} onBack={goHome} />
        )}
        {screen === "story" && selectedStory && (
          <StoryScreen
            story={selectedStory}
            step={selectedStory.steps[currentStep]}
            stepIndex={currentStep}
            totalSteps={selectedStory.steps.length}
            onChoice={makeChoice}
            onBack={goHome}
            // pathHistory={pathHistory}
          />
        )}
        {screen === "ending" && ending && (
          <EndingScreen
            ending={ending}
            story={selectedStory}
            onRestart={restartStory}
            onHome={goHome}
            onSelect={goSelect}
          />
        )}
      </div>
    </div>
  );
}

// ============================================================
// HOME SCREEN
// ============================================================
function HomeScreen({ onStart }) {
  return (
    <div style={styles.screenCenter}>
      <div style={{ animation: "float 3s ease-in-out infinite", fontSize: 48, marginBottom: 16 }}>📜</div>
      <h1 style={styles.heroTitle}>นิทานไทย</h1>
      <p style={styles.heroSubtitle}>สี่ภาค สี่ตำนาน</p>
      <p style={styles.heroDesc}>
        เลือกเส้นทาง เปลี่ยนชะตา
        <br />
        นิทานพื้นบ้านที่คุณเป็นคนกำหนดตอนจบ
      </p>
      <button onClick={onStart} style={styles.primaryBtn}>
        เริ่มเล่น
      </button>
      <div style={styles.regionRow}>
        {["🏔️ เหนือ", "🌾 อีสาน", "🏛️ กลาง", "🌊 ใต้"].map((r, i) => (
          <span key={i} style={styles.regionTag}>{r}</span>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// SELECT SCREEN
// ============================================================
function SelectScreen({ onSelect, onBack }) {
  return (
    <div style={styles.selectContainer}>
      <button className="nav-btn" onClick={onBack} style={styles.backBtn}>
        ← กลับ
      </button>
      <h2 style={styles.selectTitle}>เลือกนิทาน</h2>
      <p style={styles.selectDesc}>เลือกนิทานที่อยากอ่าน แต่ละเรื่องมี 3 ตอนจบ</p>
      <div className="card-grid">
        {STORIES.map((story) => (
          <div
            key={story.id}
            className="story-card"
            onClick={() => onSelect(story)}
            style={{
              ...styles.storyCard,
              borderTop: `4px solid ${story.regionColor}`,
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>{story.emoji}</div>
            <span style={{ ...styles.cardRegion, color: story.regionColor }}>
              {story.region}
            </span>
            <h3 style={styles.cardTitle}>{story.title}</h3>
            <p style={styles.cardSummary}>{story.summary}</p>
            <div style={styles.cardMeta}>
              <span>5 ตอน</span>
              <span>•</span>
              <span>3 ตอนจบ</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// STORY SCREEN
// ============================================================
function StoryScreen({ story, step, stepIndex, totalSteps, onChoice, onBack }) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showChoices, setShowChoices] = useState(false);
  const [prevStep, setPrevStep] = useState(stepIndex);

  if (stepIndex !== prevStep) {
    setPrevStep(stepIndex);
    setSelectedChoice(null);
    setShowChoices(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowChoices(true), 600);
    return () => clearTimeout(timer);
  }, [stepIndex]);

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
    setTimeout(() => onChoice(choice), 500);
  };

  return (
    <div className="story-page-container" style={styles.storyContainer}>
      {/* Header (อยู่ด้านบนเสมอ) */}
      <div style={styles.storyHeader}>
        <button className="nav-btn" onClick={onBack} style={styles.storyBackBtn}>✕</button>
        <div style={styles.storyHeaderInfo}>
          <span style={{ ...styles.storyRegionBadge, background: story.regionColor }}>
            {story.emoji} {story.region}
          </span>
          <span style={styles.storyTitleSmall}>{story.title}</span>
        </div>
      </div>

      {/* แบ่ง Layout ซ้าย-ขวา */}
      <div className="story-layout">
        
        {/* คอลัมน์ซ้าย: แถบความคืบหน้า + รูปภาพ */}
        <div className="story-image-wrapper">
          <div style={styles.progressContainer}>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${((stepIndex + 1) / totalSteps) * 100}%`, background: story.regionColor }} />
            </div>
            <span style={styles.progressText}>{stepIndex + 1} / {totalSteps}</span>
          </div>

          {step.image.includes('/') || step.image.includes('.') ? (
            <img src={step.image} alt={step.title} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 16, marginBottom: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
          ) : (
            <div style={styles.imagePlaceholder}>
              <div style={styles.imagePlaceholderInner}>
                <span style={{ fontSize: 28, marginBottom: 6 }}>🖼️</span>
                <span style={styles.imagePlaceholderText}>{step.image}</span>
                <span style={styles.imagePlaceholderHint}>ใส่รูปภาพที่นี่</span>
              </div>
            </div>
          )}
        </div>

        {/* คอลัมน์ขวา: เนื้อเรื่อง + ตัวเลือก */}
        <div className="story-content-wrapper">
          <div style={styles.storyContent}>
            <h3 style={{ ...styles.stepTitle, color: story.regionColor }}>{step.title}</h3>
            <p style={styles.stepText}>{step.text}</p>
          </div>

          <div style={{ ...styles.choicesContainer, opacity: showChoices ? 1 : 0, transform: showChoices ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>
            <p style={styles.choicePrompt}>เลือกเส้นทาง</p>
            {step.choices.map((choice, i) => (
              <button
                key={i}
                className="choice-btn"
                onClick={() => !selectedChoice && handleChoice(choice)}
                style={{
                  ...styles.choiceBtn,
                  borderColor: selectedChoice === choice ? story.regionColor : "rgba(0,0,0,0.08)",
                  background: selectedChoice === choice ? `${story.regionColor}08` : "#fff",
                  opacity: selectedChoice && selectedChoice !== choice ? 0.4 : 1,
                  animationDelay: `${i * 0.1}s`,
                  transition: "all 0.3s ease",
                }}
              >
                <span style={styles.choiceNumber}>{["ก", "ข", "ค"][i]}</span>
                <span style={styles.choiceText}>{choice.text}</span>
                {choice.label && (
                  <span style={{ ...styles.originalBadge, background: story.regionColor }}>{choice.label}</span>
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ============================================================
// ENDING SCREEN
// ============================================================
function EndingScreen({ ending, story, onRestart, onHome, onSelect }) {
  return (
    <div style={styles.endingContainer}>
      {/* Image Placeholder */}
      {ending.image.includes('/') || ending.image.includes('.') ? (
        <img
          src={ending.image}
          alt={ending.title}
          style={{ 
            width: "100%", 
            aspectRatio: "4/3", 
            objectFit: "cover", 
            borderRadius: 16, 
            marginBottom: 24,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
          }}
        />
      ) : (
        <div style={{ ...styles.imagePlaceholder, marginBottom: 24 }}>
          <div style={styles.imagePlaceholderInner}>
            <span style={{ fontSize: 28, marginBottom: 6 }}>🖼️</span>
            <span style={styles.imagePlaceholderText}>{ending.image}</span>
            <span style={styles.imagePlaceholderHint}>ใส่รูปภาพตอนจบที่นี่</span>
          </div>
        </div>
      )}

      <span style={{ ...styles.storyRegionBadge, background: story.regionColor, marginBottom: 12 }}>
        {story.emoji} {story.title}
      </span>

      <h2 style={{ ...styles.endingTitle, color: story.regionColor }}>{ending.title}</h2>
      <p style={styles.endingText}>{ending.text}</p>

      <div style={{ ...styles.moralBox, borderLeftColor: story.regionColor }}>
        <p style={styles.moralLabel}>💡 ข้อคิดจากนิทาน</p>
        <p style={styles.moralText}>{ending.moral}</p>
      </div>

      {story.fullStoryUrl && (
        <a
          href={story.fullStoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.readMoreLink, background: story.regionColor }}
        >
          📖 อ่านเรื่องเต็ม: {story.title}
        </a>
      )}

      <div style={styles.endingActions}>
        <button onClick={onRestart} style={{ ...styles.secondaryBtn, borderColor: story.regionColor, color: story.regionColor }}>
          🔄 เล่นซ้ำ เปลี่ยนตอนจบ
        </button>
        <button onClick={onSelect} style={{ ...styles.secondaryBtn, borderColor: "#888", color: "#666" }}>
          📖 เลือกเรื่องอื่น
        </button>
        <button onClick={onHome} style={{ ...styles.textBtn }}>
          กลับหน้าหลัก
        </button>
      </div>
    </div>
  );
}

// ============================================================
// STYLES OBJECT
// ============================================================
const styles = {
  container: {
    fontFamily: "'Noto Sans Thai', 'Noto Serif Thai', sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #FAF6F0 0%, #F0E8DC 100%)",
    color: "#2D2419",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 520,
    minHeight: "100vh",
    padding: "0 20px",
  },

  // Home
  screenCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: "40px 0",
  },
  heroTitle: {
    fontFamily: "'Noto Serif Thai', serif",
    fontSize: 42,
    fontWeight: 700,
    color: "#2D2419",
    marginBottom: 4,
    letterSpacing: "-0.5px",
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: 400,
    color: "#8B7355",
    marginBottom: 20,
    letterSpacing: "4px",
  },
  heroDesc: {
    fontSize: 15,
    lineHeight: 1.7,
    color: "#6B5B4A",
    marginBottom: 32,
    maxWidth: 300,
  },
  primaryBtn: {
    background: "#2D2419",
    color: "#FAF6F0",
    border: "none",
    borderRadius: 50,
    padding: "14px 48px",
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "'Noto Sans Thai', sans-serif",
    cursor: "pointer",
    marginBottom: 32,
    transition: "transform 0.2s",
  },
  regionRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  regionTag: {
    fontSize: 13,
    color: "#8B7355",
    padding: "6px 14px",
    borderRadius: 20,
    background: "rgba(139,115,85,0.08)",
  },

  // Select
  selectContainer: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  backBtn: {
    background: "none",
    border: "none",
    fontSize: 15,
    color: "#8B7355",
    cursor: "pointer",
    padding: "8px 0",
    fontFamily: "'Noto Sans Thai', sans-serif",
    marginBottom: 16,
  },
  selectTitle: {
    fontFamily: "'Noto Serif Thai', serif",
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 6,
  },
  selectDesc: {
    fontSize: 14,
    color: "#8B7355",
    marginBottom: 24,
  },
  cardGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  storyCard: {
    background: "#fff",
    borderRadius: 16,
    padding: "24px 20px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  },
  cardRegion: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "2px",
    display: "block",
    marginBottom: 4,
  },
  cardTitle: {
    fontFamily: "'Noto Serif Thai', serif",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 8,
  },
  cardSummary: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#6B5B4A",
    marginBottom: 12,
  },
  cardMeta: {
    fontSize: 12,
    color: "#A89880",
    display: "flex",
    gap: 8,
  },

  // Story
  storyContainer: {
    paddingTop: 16,
    paddingBottom: 40,
  },
  storyHeader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  storyBackBtn: {
    background: "rgba(0,0,0,0.05)",
    border: "none",
    borderRadius: "50%",
    width: 36,
    height: 36,
    fontSize: 14,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontFamily: "'Noto Sans Thai', sans-serif",
    color: "#6B5B4A",
  },
  storyHeaderInfo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  storyRegionBadge: {
    color: "#fff",
    fontSize: 11,
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: 20,
    display: "inline-block",
    whiteSpace: "nowrap",
  },
  storyTitleSmall: {
    fontFamily: "'Noto Serif Thai', serif",
    fontSize: 16,
    fontWeight: 600,
  },

  // Progress
  progressContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    background: "rgba(0,0,0,0.06)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
    transition: "width 0.5s ease",
  },
  progressText: {
    fontSize: 12,
    color: "#A89880",
    fontWeight: 500,
    minWidth: 32,
    textAlign: "right",
  },

  // Image Placeholder
  imagePlaceholder: {
    width: "100%",
    aspectRatio: "4/3",
    borderRadius: 16,
    background: "rgba(139,115,85,0.06)",
    border: "2px dashed rgba(139,115,85,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    overflow: "hidden",
  },
  imagePlaceholderInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  imagePlaceholderText: {
    fontSize: 12,
    fontWeight: 600,
    color: "#A89880",
    fontFamily: "monospace",
  },
  imagePlaceholderHint: {
    fontSize: 11,
    color: "#C4B8A8",
  },

  // Story Content
  storyContent: {
    marginBottom: 28,
  },
  stepTitle: {
    fontFamily: "'Noto Serif Thai', serif",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 12,
  },
  stepText: {
    fontSize: 15,
    lineHeight: 1.8,
    color: "#3D3225",
  },

  // Choices
  choicesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  choicePrompt: {
    fontSize: 13,
    fontWeight: 600,
    color: "#A89880",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  choiceBtn: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "14px 16px",
    borderRadius: 14,
    border: "2px solid rgba(0,0,0,0.08)",
    background: "#fff",
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "'Noto Sans Thai', sans-serif",
    position: "relative",
    width: "100%",
  },
  choiceNumber: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "rgba(0,0,0,0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 700,
    color: "#8B7355",
    flexShrink: 0,
  },
  choiceText: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#2D2419",
    flex: 1,
    paddingTop: 3,
  },
  originalBadge: {
    position: "absolute",
    top: -8,
    right: 12,
    color: "#fff",
    fontSize: 10,
    fontWeight: 600,
    padding: "2px 8px",
    borderRadius: 10,
  },

  // Ending
  endingContainer: {
    paddingTop: 32,
    paddingBottom: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  endingTitle: {
    fontFamily: "'Noto Serif Thai', serif",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 16,
    lineHeight: 1.4,
  },
  endingText: {
    fontSize: 15,
    lineHeight: 1.8,
    color: "#3D3225",
    textAlign: "left",
    marginBottom: 24,
    maxWidth: 480,
  },
  moralBox: {
    background: "rgba(139,115,85,0.06)",
    borderLeft: "4px solid #8B7355",
    borderRadius: "0 12px 12px 0",
    padding: "16px 20px",
    textAlign: "left",
    marginBottom: 32,
    width: "100%",
    maxWidth: 480,
  },
  moralLabel: {
    fontSize: 13,
    fontWeight: 700,
    color: "#8B7355",
    marginBottom: 6,
  },
  moralText: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#5A4A3A",
  },
  endingActions: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%",
    maxWidth: 320,
  },
  secondaryBtn: {
    background: "none",
    border: "2px solid",
    borderRadius: 50,
    padding: "12px 24px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Noto Sans Thai', sans-serif",
    transition: "all 0.2s",
  },
  textBtn: {
    background: "none",
    border: "none",
    fontSize: 14,
    color: "#A89880",
    cursor: "pointer",
    padding: "8px",
    fontFamily: "'Noto Sans Thai', sans-serif",
  },
  readMoreLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "#fff",
    textDecoration: "none",
    padding: "14px 28px",
    borderRadius: 50,
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "'Noto Sans Thai', sans-serif",
    marginBottom: 24,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    cursor: "pointer",
  },
};
