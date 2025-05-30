import { Hex } from "@components/generic-ui/hex/hex";
import styles from "./creature-sheet.module.css";
import {
  CONDITIONS,
  CreatureConditionMenu,
} from "@components/generic-ui/creature-condition-menu/creature-condition-menu";
import { useCallback, useState } from "react";

const BracketedBox = ({ title, children }) => (
  <>
    <div className="chevron-down">{title}</div>
    <div>
      <div className="bracketed-box">{children}</div>
    </div>
  </>
);

const VIEW_TYPES = {
  COMPACT: "compact",
  EXPANDED: "expanded",
};

const currentView = VIEW_TYPES.EXPANDED;

export const CreatureSheet = ({ creatureConfig }) => {
  const [condition, setCondition] = useState(CONDITIONS.ALIVE);
  const handleConditionChange = useCallback((condition) => {
    setCondition(condition);
  }, []);

  return (
    <article
      className={`${
        condition === CONDITIONS.KNOCKED_DOWN ? styles.knockedDown : ""
      } ${condition === CONDITIONS.DEAD ? styles.dead : ""}`}
    >
      {condition === CONDITIONS.DEAD && (
        <div className={styles.deadBlock}>DEAD</div>
      )}
      <div>
        <div className="div1 text_heading text_highlighted">
          <CreatureConditionMenu
            title={creatureConfig.description}
            onConditionChange={handleConditionChange}
          />
          {creatureConfig.attackNum === 2 && (
            <div className="danger text_md">
              [Attacks <span className="text_highlighted">2</span> times on its
              turn]
            </div>
          )}
        </div>
        <div className="top_block">
          <div className="hex_block">
            <Hex num={creatureConfig.STR} className={"div1"}>
              STR
            </Hex>
            <Hex num={creatureConfig.DEX} className={"div2"}>
              DEX
            </Hex>
            <Hex num={creatureConfig.CON} className={"div3"}>
              CON
            </Hex>
            <Hex num={creatureConfig.WIL} className={"div4"}>
              WIL
            </Hex>
            <Hex num={creatureConfig.INT} className={"div5"}>
              INT
            </Hex>
            <Hex num={creatureConfig.CHA} className={"div6"}>
              CHA
            </Hex>
          </div>
          <div className="stats">
            <div>
              <span className="chevron-right">wounds</span>
              <span className=" text_highlighted boxed-stat">
                {creatureConfig.wounds}
              </span>
            </div>
            <div>
              <span className="chevron-right">awareness</span>
              <span className=" text_highlighted boxed-stat">
                {creatureConfig.awareness}
              </span>
            </div>
            <div>
              <span className="chevron-right">armor</span>
              <span className=" text_highlighted boxed-stat">
                {creatureConfig.armor === 0 ? "-" : creatureConfig.armor}
              </span>
            </div>
            <div>
              <span className="chevron-right">defense</span>
              <span className="div8 text_highlighted boxed-stat">
                {creatureConfig.defense === 0 ? "-" : creatureConfig.defense}
              </span>
            </div>
          </div>
        </div>
        {currentView === VIEW_TYPES.EXPANDED && (
          <>
            <BracketedBox title={"Damage"}>
              <div>
                <span className="chevron-right">Attack skill</span>
                <span className="text_highlighted">
                  {creatureConfig.attackSkill}
                </span>
              </div>
              <div>
                <span className="chevron-right">Damage</span>
                <span className="text_highlighted">
                  {creatureConfig.damage}+{creatureConfig.damageMod}
                </span>
              </div>
            </BracketedBox>
            <div>
              <span className="chevron-right"> Range (if applicable)</span>
              <span className="text_highlighted">{creatureConfig.range}</span>
            </div>
            <div>
              <span className="chevron-right">abilities</span>
              <span className="danger">
                {creatureConfig.abilities.join(", ")}
              </span>
            </div>
            {creatureConfig.recovery && (
              <div>
                <div className="chevron-down">Recovery reactions</div>
                <div className="space-left">
                  <div>
                    <span className="danger space-right angle-right">
                      [Bloodied]
                    </span>
                    <span className="neutral">
                      {creatureConfig.recovery.bloodied}
                    </span>
                  </div>
                  <div>
                    <span className="danger space-right angle-right">
                      [Cornered]
                    </span>
                    <span className="neutral">
                      {creatureConfig.recovery.cornered}
                    </span>
                  </div>
                  <div>
                    <span className="danger space-right angle-right">
                      [Overwhelmed]
                    </span>
                    <span className="neutral">
                      {creatureConfig.recovery.overwhelmed}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div>
              <span className="chevron-right">Appearance</span>
              <span className="neutral">{creatureConfig.appearance}</span>
            </div>

            <BracketedBox title={"Enemy role"}>
              {creatureConfig.roleProperties.map((p, i) => (
                <span className="angle-right" key={`${p}-${i}`}>
                  {p}
                </span>
              ))}
            </BracketedBox>
            <div>
              <span className="chevron-right">Size</span>
              <span className="neutral">{creatureConfig.size}</span>
            </div>
          </>
        )}
      </div>
    </article>
  );
};
