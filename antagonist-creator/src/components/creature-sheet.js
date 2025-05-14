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
        <span className="space-right">{creatureConfig.description}</span>
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
      <BracketedBox title={"Damage"}>
        <div>
          <span className="chevron-right">Attack skill</span>
          <span className="text_highlighted">{creatureConfig.attackSkill}</span>
        </div>
        <div>
          <span className="chevron-right">Damage</span>
          <span className="text_highlighted">{creatureConfig.damage}</span>
        </div>
      </BracketedBox>
      <div>
        <span className="chevron-right"> Range (if applicable)</span>
        <span className="text_highlighted">{creatureConfig.range}</span>
      </div>
      <div>
        <span className="chevron-right">abilities</span>
        <span className="danger">{creatureConfig.abilities.join(", ")}</span>
      </div>
      {creatureConfig.recovery && (
        <div>
          <div className="chevron-down">Recovery reactions</div>
          <div className="space-left">
            <div>
              <span className="danger space-right angle-right">[Bloodied]</span>
              <span className="neutral">
                {creatureConfig.recovery.bloodied}
              </span>
            </div>
            <div>
              <span className="danger space-right angle-right">[Cornered]</span>
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
    </article>
  );
};
