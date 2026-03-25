"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "yet-another-react-lightbox/styles.css";
import { tagList, categoryListContent } from "@/data/portfolio";
import ListHeader from "./Header";
import styles from "./List.module.scss";

type ListProps = {
  category: string;
};

type TabPanelProps = {
  children: React.ReactNode;
  value: number;
  index: number;
};

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      className={styles.tabPanel}
    >
      {value === index && <div className={styles.tabPanelInner}>{children}</div>}
    </div>
  );
};

const List = ({ category }: ListProps) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const tagIndex = tagList.findIndex(
        (item) => item.toLowerCase() === category?.toLowerCase()
    );

    const [currentTag, setCurrentTag] = useState(tagIndex >= 0 ? tagIndex : 0);

    const sortedItems = useMemo(() => {
        return [...categoryListContent].sort((p1, p2) =>
        p1.content.projectDate < p2.content.projectDate
            ? 1
            : p1.content.projectDate > p2.content.projectDate
            ? -1
            : 0
        );
    }, []);

    const a11yProps = (val: string, index: number) => ({
        id: `portfolio-tab-${index}`,
        "aria-controls": `portfolio-tabpanel-${index}`,
    });

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setCurrentTag(newValue);
        console.log(newValue);
        router.push(`/portfolio/${tagList[newValue].toLowerCase()}`);
    };

    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (tagIndex >= 0) {
        setCurrentTag(tagIndex);
        }
    }, [tagIndex]);

  return (
        <section className={`${styles.portfolioListSection}`}>
            <ListHeader />
            <div className={styles.container}>
                <div className={styles.positionRelative}>
                <div className={styles.portfolioFilter}>
                    <Tabs className={styles.tabList} value={currentTag} onChange={handleChange} aria-label="portfolio tabs">
                        {tagList.map((val, i) => (
                        <Tab
                            key={val}
                            label={val}
                            id={`portfolio-tab-${i}`}
                            aria-controls={`portfolio-tabpanel-${i}`}
                        />
                        ))}
                    </Tabs>

                    <div className={styles.portfolioList}>
                        {tagList.map((val, i) => (
                            <TabPanel value={currentTag} index={i} key={val}>
                                <ul className={styles.grid}>
                                {sortedItems
                                    .filter((item) =>
                                        val !== "All" ? item.category === val : true
                                    )
                                    .map((item) => (
                                    <li key={item.slug} className={styles.card}>
                                        <div
                                        className={styles.imageWrap}
                                        onClick={() =>
                                            router.push(
                                            `/portfolio/${item.category.toLowerCase()}/${item.content.projectDate}/${item.slug}`
                                            )
                                        }
                                        >
                                        <img
                                            src={`/img/portfolio/${item.category.toLowerCase()}/${item.img}`}
                                            alt={item.title}
                                        />
                                        </div>

                                        <div className={styles.meta}>
                                        <div className={styles.title}>
                                            {item.title}
                                        </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        {/* <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={imgItems.map(item => ({
                src: `/img/.../${item.img}`
            }))}
        /> */}
        </section >
  );
};

export default List;