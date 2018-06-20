import React from 'react';
import CabinetUser from '../components/cabinetUser';
import { URL } from '../constants';

export default {
    component: CabinetUser,
    reduxState: { isMobile: false },
    url: URL.ROOT,
    "classes": {
        "root": "CabinetUser-root-1",
        "leftPanel": "CabinetUser-leftPanel-2",
        "rightContainer": "CabinetUser-rightContainer-3",
        "top": "CabinetUser-top-4",
        "header": "CabinetUser-header-5",
        "body": "CabinetUser-body-6",
        "test": "CabinetUser-test-7"
    },
    "match": {
        "path": "/",
        "url": "/",
        "isExact": true,
        "params": {}
    },
    "location": {
        "pathname": "/",
        "search": "",
        "hash": ""
    },
    "history": {
        "length": 1,
        "action": "POP",
        "location": {},
        "createHref": {},
        "push": {},
        "replace": {},
        "go": {},
        "goBack": {},
        "goForward": {},
        "block": {},
        "listen": {}
    },
    "isMobile": false,
    "handlerLogout": "[function handlerLogout]"
}