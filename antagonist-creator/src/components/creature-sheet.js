import { config } from "../config/antagonists-config";
import { generate } from "../utils/antagonist-generator";

const Hex = ({ num, className, children }) => (
  <div className={`hex-wrapper ${className}`}>
    <span className="title">{children}</span>
    <svg viewBox="0 0 100 95" className="hex-svg">
      <polygon
        points="50,0 100,25 100,75 50,100 0,75 0,25"
        fill="none"
        stroke="#59b3b7"
        strokeWidth="3"
      />
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle">
        {num}
      </text>
    </svg>
  </div>
);

const BracketedBox = ({ title, children }) => (
  <>
    <div className="chevron-down">{title}</div>
    <div>
      <div className="bracketed-box">{children}</div>
    </div>
  </>
);

export const CreatureSheet = ({ creatureConfig }) => {
  return (
    <article>
      <div className="div1 text_heading text_highlighted">
        <span className="space-right">
          {creatureConfig.difficulty.description}
        </span>
        <span className="neutral">"{creatureConfig.name}"</span>
        {creatureConfig.difficulty.attack_num === 2 && (
          <div className="danger text_md">
            [Attacks <span className="text_highlighted">2</span> times on its
            turn]
          </div>
        )}
      </div>
      <div className="top_block">
        <div className="hex_block">
          <Hex num={creatureConfig.difficulty.STR} className={"div1"}>
            STR
          </Hex>
          <Hex num={creatureConfig.difficulty.DEX} className={"div2"}>
            DEX
          </Hex>
          <Hex num={creatureConfig.difficulty.CON} className={"div3"}>
            CON
          </Hex>
          <Hex num={creatureConfig.difficulty.WIL} className={"div4"}>
            WIL
          </Hex>
          <Hex num={creatureConfig.difficulty.INT} className={"div5"}>
            INT
          </Hex>
          <Hex num={creatureConfig.difficulty.CHA} className={"div6"}>
            CHA
          </Hex>
        </div>
        <div className="stats">
          <div>
            <span className="chevron-right">wounds</span>
            <span className=" text_highlighted boxed-stat">
              {creatureConfig.difficulty.wounds}
            </span>
          </div>
          <div>
            <span className="chevron-right">awareness</span>
            <span className=" text_highlighted boxed-stat">
              {creatureConfig.difficulty.awareness}
            </span>
          </div>
          <div>
            <span className="chevron-right">armor</span>
            <span className=" text_highlighted boxed-stat">
              {creatureConfig.difficulty.armor === 0
                ? "-"
                : creatureConfig.difficulty.armor}
            </span>
          </div>
          <div>
            <span className="chevron-right">defense</span>
            <span className="div8 text_highlighted boxed-stat">
              {creatureConfig.difficulty.defense === 0
                ? "-"
                : creatureConfig.difficulty.defense}
            </span>
          </div>
        </div>
      </div>
      <BracketedBox title={"Damage"}>
        <div>
          <span className="chevron-right">Attack skill</span>
          <span className="text_highlighted">
            +{creatureConfig.difficulty.damage.attack_skill}
          </span>
        </div>
        <div>
          <span className="chevron-right">Damage</span>
          <span className="text_highlighted">
            +{creatureConfig.difficulty.damage.damage_mod}
          </span>
        </div>
      </BracketedBox>
      <div>
        <span className="chevron-right"> Range (if applicable)</span>
        <span className="text_highlighted">
          {creatureConfig.difficulty.range}
        </span>
      </div>
      <div>
        <span className="chevron-right">abilities</span>
        <span className="danger">{creatureConfig.ability}</span>
      </div>
      {creatureConfig.difficulty.recovery && (
        <div>
          <div className="chevron-down">Recovery reactions</div>
          <div className="space-left">
            <div>
              <span className="danger space-right angle-right">[Bloodied]</span>
              <span className="neutral">
                {creatureConfig.difficulty.recovery.bloodied}
              </span>
            </div>
            <div>
              <span className="danger space-right angle-right">[Cornered]</span>
              <span className="neutral">
                {creatureConfig.difficulty.recovery.cornered}
              </span>
            </div>
            <div>
              <span className="danger space-right angle-right">
                [Overwhelmed]
              </span>
              <span className="neutral">
                {creatureConfig.difficulty.recovery.overwhelmed}
              </span>
            </div>
          </div>
        </div>
      )}
      <div>
        <span className="chevron-right">Appearance</span>
        <span className="neutral">{creatureConfig.appearance}</span>
      </div>
      <div>
        <span className="chevron-right">Type</span>
        <span className="neutral">{creatureConfig.type}</span>
      </div>
      <BracketedBox title={<div>{creatureConfig.role}</div>}>
        {creatureConfig.role_properties.map((p, i) => (
          <span key={`${p}-${i}`} className="angle-right">
            {p}
          </span>
        ))}
        <span className="angle-right">{creatureConfig.role_properties}</span>
      </BracketedBox>
      <div>
        <span className="chevron-right">Size</span>
        <span className="neutral">{creatureConfig.size}</span>
      </div>
    </article>
  );
};
