import React from "react";

const Address = (props) => {
  const { val, updateState } = props;
  const prefecture = [
    { label: "選択してください", value: "" },

    { label: "北海道", value: "0" },
    { label: "青森", value: "1" },
    { label: "岩手", value: "2" },
    { label: "宮城", value: "3" },
    { label: "秋田", value: "4" },
    { label: "山形", value: "5" },
    { label: "福島", value: "6" },
    { label: "茨城", value: "7" },
    { label: " 栃木", value: "8" },
    { label: "群馬", value: "9" },
    { label: "埼玉", value: "10" },
    { label: " 千葉", value: "11" },
    { label: " 東京", value: "12" },
    { label: " 神奈川", value: "13" },
    { label: " 新潟", value: "14" },
    { label: "富山", value: "15" },
    { label: "石川", value: "16" },
    { label: "福井", value: "17" },
    { label: "山梨", value: "18" },
    { label: "長野", value: "19" },
    { label: "岐阜", value: "20" },
    { label: " 静岡", value: "21" },
    { label: "愛知", value: "22" },
    { label: "三重", value: "23" },
    { label: "滋賀", value: "24" },
    { label: "京都", value: "25" },
    { label: " 大阪", value: "26" },
    { label: " 兵庫", value: "27" },
    { label: "奈良", value: "28" },
    { label: "和歌山", value: "29" },
    { label: "鳥取", value: "30" },
    { label: "島根", value: "31" },
    { label: "岡山", value: "32" },
    { label: "広島", value: "33" },
    { label: "山口", value: "34" },
    { label: "徳島", value: "35" },
    { label: "香川", value: "36" },
    { label: "愛媛", value: "37" },
    { label: "高知", value: "38" },
    { label: "福岡", value: "39" },
    { label: "佐賀", value: "40" },
    { label: "長崎", value: "41" },
    { label: "熊本", value: "42" },
    { label: "大分", value: "43" },
    { label: "宮崎", value: "44" },
    { label: "鹿児島", value: "45" },
    { label: "沖縄", value: "46" },
  ];
  const prefectureLists = prefecture.map((p, index) => (
    <option value={p.value} key={index}>
      {p.label}
    </option>
  ));

  return (
    <dl>
      <dt>ご住所</dt>
      <dd className="adress-data-wrap">
        <div>
          <input
            type="text"
            name="zip"
            required
            placeholder="117-2345"
            value={val.zip}
            onChange={(e) => updateState(e)}
          />
        </div>
        <div>
          <span>
            <select
              name="prefecture"
              required
              placeholder="東京都"
              value={val.prefecture}
              onChange={(e) => updateState(e)}
            >
              {prefectureLists}
            </select>
          </span>

          <span>
            <input
              type="text"
              name="city"
              required
              placeholder="豊島区池袋"
              value={val.city}
              onChange={(e) => updateState(e)}
            />
          </span>
          <span>
            <input
              type="text"
              name="address3"
              required
              placeholder="3-7-18"
              value={val.adress3}
              onChange={(e) => updateState(e)}
            />
          </span>
          <span>
            <input
              type="text"
              name="building"
              required
              placeholder="ブルジュファリハ"
              value={val.useId}
              onChange={(e) => updateState(e)}
            />
          </span>
        </div>
      </dd>
    </dl>
  );
};
export default Address;
