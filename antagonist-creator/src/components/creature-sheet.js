import { config } from "../config/config";
import { generate } from "../utils/antagonist-generator";
import { useCallback } from "react";

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

export const CreatureSheet = () => {
  const { antagonists } = config;
  const critter = generate(antagonists);

  const handleRegenerateClick = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <article>
      <div className="div1 text_heading text_highlighted">
        <span className="space-right">{critter.difficulty.description}</span>
        <span className="neutral">"{critter.name}"</span>
        {critter.difficulty.attack_num === 2 && (
          <div className="danger text_md">
            [Attacks <span className="text_highlighted">2</span> times on its
            turn]
          </div>
        )}
      </div>
      <div className="top_block">
        <div className="hex_block">
          <Hex num={critter.difficulty.STR} className={"div1"}>
            STR
          </Hex>
          <Hex num={critter.difficulty.DEX} className={"div2"}>
            DEX
          </Hex>
          <Hex num={critter.difficulty.CON} className={"div3"}>
            CON
          </Hex>
          <Hex num={critter.difficulty.WIL} className={"div4"}>
            WIL
          </Hex>
          <Hex num={critter.difficulty.INT} className={"div5"}>
            INT
          </Hex>
          <Hex num={critter.difficulty.CHA} className={"div6"}>
            CHA
          </Hex>
        </div>
        <div className="stats">
          <div>
            <span className="chevron-right">wounds</span>
            <span className=" text_highlighted boxed-stat">
              {critter.difficulty.wounds}
            </span>
          </div>
          <div>
            <span className="chevron-right">awareness</span>
            <span className=" text_highlighted boxed-stat">
              {critter.difficulty.awareness}
            </span>
          </div>
          <div>
            <span className="chevron-right">armor</span>
            <span className=" text_highlighted boxed-stat">
              {critter.difficulty.armor === 0 ? "-" : critter.difficulty.armor}
            </span>
          </div>
          <div>
            <span className="chevron-right">defense</span>
            <span className="div8 text_highlighted boxed-stat">
              {critter.difficulty.defense === 0
                ? "-"
                : critter.difficulty.defense}
            </span>
          </div>
        </div>
      </div>
      <BracketedBox title={"Damage"}>
        <div>
          <span className="chevron-right">Attack skill</span>
          <span className="text_highlighted">
            +{critter.difficulty.damage.attack_skill}
          </span>
        </div>
        <div>
          <span className="chevron-right">Damage</span>
          <span className="text_highlighted">
            +{critter.difficulty.damage.damage_mod}
          </span>
        </div>
      </BracketedBox>
      <div>
        <span className="chevron-right"> Range (if applicable)</span>
        <span className="text_highlighted">{critter.difficulty.range}</span>
      </div>
      <div>
        <span className="chevron-right">abilities</span>
        <span className="danger">{critter.ability}</span>
      </div>
      {critter.difficulty.recovery && (
        <div>
          <div className="chevron-down">Recovery reactions</div>
          <div className="space-left">
            <div>
              <span className="danger space-right angle-right">[Bloodied]</span>
              <span className="neutral">
                {critter.difficulty.recovery.bloodied}
              </span>
            </div>
            <div>
              <span className="danger space-right angle-right">[Cornered]</span>
              <span className="neutral">
                {critter.difficulty.recovery.cornered}
              </span>
            </div>
            <div>
              <span className="danger space-right angle-right">
                [Overwhelmed]
              </span>
              <span className="neutral">
                {critter.difficulty.recovery.overwhelmed}
              </span>
            </div>
          </div>
        </div>
      )}
      <div>
        <span className="chevron-right">Appearance</span>
        <span className="neutral">{critter.appearance}</span>
      </div>
      <div>
        <span className="chevron-right">Type</span>
        <span className="neutral">{critter.type}</span>
      </div>
      <BracketedBox title={<div>{critter.role}</div>}>
        {critter.role_properties.map((p, i) => (
          <span key={`${p}-${i}`} className="angle-right">
            {p}
          </span>
        ))}
        <span className="angle-right">{critter.role_properties}</span>
      </BracketedBox>
      <div>
        <span className="chevron-right">Size</span>
        <span className="neutral">{critter.size}</span>
      </div>
      <button onClick={handleRegenerateClick} className="regen_button danger">
        [regenerate]
      </button>
    </article>
  );
};
